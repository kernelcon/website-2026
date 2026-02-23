#!/usr/bin/env python3
"""
Sync speakers.json from agenda.json and CFP CSV.
- Excludes keynotes (they're on keynotes tab).
- Splits combined authors (e.g. "Evan and Luke") into separate speaker entries.
- Fills bio, company, image, social from CSV where title/speaker match.
- Downloads headshot URLs to src/static/images/speakers/ when possible.
"""
import csv
import json
import re
import os
import urllib.request
from pathlib import Path

AGENDA_PATH = Path(__file__).resolve().parent.parent / "config/content/agenda.json"
CSV_PATH = Path("/Users/clevernyyyy/Downloads/2026 CFP scrappy review - Sheet1.csv")
SPEAKERS_JSON_PATH = Path(__file__).resolve().parent.parent / "config/content/speakers.json"
SPEAKERS_IMG_DIR = Path(__file__).resolve().parent.parent / "src/static/images/speakers"

# Skip these talk titles (not regular session speakers)
SKIP_TITLES = {
    "", "Registration Opens", "Opening Remarks", "Keynote: Casey Ellis", "Keynote: Phillip Wylie",
    "Keynote: Phillip Wylie", "Break (30 min room switch) · Book signing: TBA",
    "Break (snacks)", "Lunch (on your own)", "Open Bar / Appetizers & Hors d'oeuvres",
    "Kernel Panic", "PWP Setup", "TBA", "Supernovas",
}
SKIP_PREFIXES = ("Break ", "Lunch ", "Open Bar", "Kernel Panic", "Registration", "Opening ", "Keynote:")


def normalize_title(t):
    """Normalize for fuzzy matching."""
    if not t:
        return ""
    t = t.lower().strip()
    t = re.sub(r"[^\w\s]", "", t)
    t = re.sub(r"\s+", " ", t)
    return t[:70]  # agenda may truncate


def slug(s):
    """Lowercase alphanumeric slug."""
    s = re.sub(r"[^\w\s]", "", s.lower())
    s = re.sub(r"\s+", "", s)
    return s or "unknown"


def split_authors(author_str):
    """Split 'Name1 (handle) and Name2' into ['Name1 (handle)', 'Name2']."""
    if not author_str or not author_str.strip():
        return []
    # Split by " and " but not inside parentheses
    parts = []
    current = []
    i = 0
    s = author_str.strip()
    depth = 0
    while i < len(s):
        if s[i:i+5] == " and " and depth == 0:
            parts.append("".join(current).strip())
            current = []
            i += 5
            continue
        if s[i] == "(":
            depth += 1
        elif s[i] == ")":
            depth -= 1
        current.append(s[i])
        i += 1
    if current:
        parts.append("".join(current).strip())
    return [p for p in parts if p]


def parse_social(url):
    """Return dict with linkedin, twitter, etc. from preferred social URL. Only return valid URLs."""
    url = (url or "").strip()
    if not url or "," in url or " " in url or len(url) < 10:
        return {}
    if not url.startswith("http"):
        url = "https://" + url
    if "linkedin.com" in url and "/in/" in url:
        return {"linkedin": url}
    if ("x.com" in url or "twitter.com" in url) and "/" in url:
        return {"twitter": url}
    if "github.com" in url:
        return {"github": url}
    if "mastodon" in url.lower() and "." in url:
        return {"mastodon": url}
    return {}


def download_image(url, dest_path):
    """Download image from URL to dest_path. Return True if successful."""
    if not url or not url.strip().startswith("http"):
        return False
    # Skip Google Drive and similar (need special handling)
    if "drive.google.com" in url or "docs.google.com" in url:
        return False
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Kernelcon-Speaker-Sync/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        with open(dest_path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"  [skip download] {url}: {e}")
        return False


def main():
    with open(AGENDA_PATH, "r", encoding="utf-8") as f:
        agenda = json.load(f)

    # Collect all talks from both days (exclude keynotes and non-session slots)
    # Dedupe by normalized title so we only list each session once
    seen_titles = set()
    agenda_talks = []
    for day in agenda:
        for slot in day.get("talks", []):
            title = (slot.get("talkTitle") or "").strip()
            if not title:
                continue
            if title in SKIP_TITLES:
                continue
            if any(title.startswith(p) for p in SKIP_PREFIXES):
                continue
            if slot.get("emptySlot"):
                continue
            norm = normalize_title(title)
            if norm in seen_titles:
                continue
            seen_titles.add(norm)
            authors_raw = []
            for a in slot.get("authors", []):
                n = (a.get("name") or "").strip()
                if n and not a.get("hidden"):
                    authors_raw.append(n)
            # Split "X and Y" into multiple
            author_names = []
            for a in authors_raw:
                author_names.extend(split_authors(a))
            if not author_names:
                author_names = [""]  # will be filled from CSV by title match
            agenda_talks.append({
                "title": title,
                "title_normalized": norm,
                "authors": author_names,
                "talkDescription": slot.get("talkDescription") or "",
            })

    # Load CSV and index by (normalized title, speaker name)
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        csv_rows = list(reader)

    # Map: normalized_title -> [rows]; and speaker name (for website) -> row for that title
    by_title = {}
    for row in csv_rows:
        t = (row.get("Presentation Title") or "").strip()
        if not t:
            continue
        norm = normalize_title(t)
        by_title.setdefault(norm, []).append(row)
        # Also allow partial match (agenda might truncate)
        for short in [norm[:55], norm[:45], norm[:35]]:
            if short and short not in by_title:
                by_title[short] = by_title[norm]
    # Agenda "Kernelcon: A Deep Dive..." vs CSV "Kernelcoin: A Deep Dive..."
    for k, v in list(by_title.items()):
        if "kernelcoin" in k and "deep dive" in k:
            alias = k.replace("kernelcoin", "kernelcon")
            if alias not in by_title:
                by_title[alias] = v
        if "kernelcon" in k and "deep dive" in k:
            alias = k.replace("kernelcon", "kernelcoin")
            if alias not in by_title:
                by_title[alias] = v

    def find_csv_rows(agenda_title):
        norm = normalize_title(agenda_title)
        if norm in by_title:
            return by_title[norm]
        # Try prefix match (agenda "Kernelcon: A Deep Dive..." vs CSV "Kernelcoin: A Deep Dive...")
        for csv_norm, rows in by_title.items():
            if csv_norm.startswith(norm) or norm.startswith(csv_norm):
                return rows
            # One word difference
            if norm in csv_norm or csv_norm in norm:
                return rows
        return []

    def match_speaker_to_row(name, rows):
        """Find CSV row that matches this speaker name (for this talk)."""
        name_clean = name.lower().strip()
        for row in rows:
            web_name = (row.get("Speaker Name (for website)") or "").strip()
            you_name = (row.get("Speaker Name (You)") or "").strip()
            if name_clean in web_name.lower() or name_clean in you_name.lower():
                return row
            # First/last match
            if web_name and name_clean in web_name.lower():
                return row
            parts = name_clean.replace("(", " ").split()
            if parts and any(p in web_name.lower() for p in parts if len(p) > 1):
                return row
        return None

    # Build speakers.json talks array (no keynotes)
    talks_out = []
    for at in agenda_talks:
        title = at["title"]
        csv_rows = find_csv_rows(title)
        abstract = at["talkDescription"]
        if csv_rows and csv_rows[0].get("Presentation Abstract"):
            abstract = (csv_rows[0].get("Presentation Abstract") or "").strip() or abstract

        talk_id = slug(title)
        authors_out = []
        # If agenda had no author names but we have CSV rows, use CSV speakers
        author_list = at["authors"]
        if author_list == [""] and csv_rows:
            author_list = [(r.get("Speaker Name (for website)") or r.get("Speaker Name (You)") or "").strip() for r in csv_rows]
            author_list = [a for a in author_list if a]
        for author_name in author_list:
            if not author_name:
                continue
            row = match_speaker_to_row(author_name, csv_rows) if csv_rows else None
            speaker_id = slug(author_name)
            company = ""
            bio = "Speaker bio to be added."
            image = ""
            headshot_url = ""
            linkedin = ""
            twitter = ""
            mastodon = ""
            bluesky = ""
            github = ""

            if row:
                company = (row.get("Company or affiliation") or "").strip()
                if company.lower() in ("n/a", "na", "none", ""):
                    company = ""
                bio = (row.get("Bio") or "").strip() or bio
                headshot_url = (row.get("Headshot for website") or "").strip()
                social = parse_social(row.get("Preferred social media account") or "")
                linkedin = social.get("linkedin", "")
                twitter = social.get("twitter", "")
                mastodon = social.get("mastodon", "")
                github = social.get("github", "")

            # Download headshot if URL looks like direct image
            if headshot_url and headshot_url.startswith("http"):
                ext = "jpg"
                if ".png" in headshot_url.lower():
                    ext = "png"
                elif ".webp" in headshot_url.lower():
                    ext = "webp"
                elif ".gif" in headshot_url.lower():
                    ext = "gif"
                fname = f"{speaker_id}.{ext}"
                dest = SPEAKERS_IMG_DIR / fname
                if download_image(headshot_url, dest):
                    image = fname
                    print(f"  Downloaded: {author_name} -> {fname}")

            authors_out.append({
                "name": author_name,
                "speaker_id": speaker_id,
                "company": company,
                "twitter": twitter,
                "mastodon": mastodon,
                "bluesky": bluesky,
                "github": github,
                "linkedin": linkedin,
                "image": image,
                "bio": bio,
                "talk_id": talk_id,
            })

        if not authors_out:
            continue

        # Get length from first CSV row if available
        length = "60"
        if csv_rows and csv_rows[0].get("Timeslot (minutes)"):
            raw = csv_rows[0].get("Timeslot (minutes)", "").strip()
            if raw and raw.replace(" ", "").isdigit():
                length = raw.split(",")[0].strip()

        talks_out.append({
            "title": title,
            "authors": authors_out,
            "talk_id": talk_id,
            "pdf": "",
            "video": "",
            "length": length,
            "technical": "",
            "abstract": abstract,
        })

    out = [{"talks": talks_out}]
    with open(SPEAKERS_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(talks_out)} talks to {SPEAKERS_JSON_PATH}")
    # Verify: all agenda speaker names appear
    agenda_speakers = set()
    for at in agenda_talks:
        for a in at["authors"]:
            if a:
                agenda_speakers.add(a.strip())
    out_speakers = set()
    for t in talks_out:
        for a in t["authors"]:
            out_speakers.add(a["name"])
    missing = agenda_speakers - out_speakers - {""}
    if missing:
        print("Agenda speakers not in output:", missing)
    else:
        print("All agenda speakers accounted for.")


if __name__ == "__main__":
    main()
