import React, { Component } from "react";
import "./CFP.scss";
export default class CFP extends Component {
static displayName = "CFP";
render() {
return (
<div className="con-page">
  <div className="text-area">
    <div>
      {/* Opening */}
      <p className="tab-paragraph">Calling all Explorers!</p>
      <p className="tab-paragraph">
        The Kernelcon Crew is soliciting presentations for the seventh annual Kernelcon,
        held at the Hilton Downtown in Omaha, NE, April 2-3, 2026.
      </p>
      <p className="tab-paragraph">
        Have you built an off‑grid homelab? Created stealthy, low‑power infrastructure
        that disappears into the wild? Blended digital security with survival skills or
        remote‑ready tech? Share your wisdom, your adventures, and the lessons learned.
        Submit your experience to our CFP!
      </p>
      <p className="tab-paragraph">
        As you plan your submission, feel free to peruse the{" "}
        <a href="http://2019.kernelcon.org/agenda" className="text-highlight" target="_blank" rel="noopener noreferrer">2019</a>,{" "}
        <a href="https://2020.kernelcon.org/agenda#schedule" className="text-highlight" target="_blank" rel="noopener noreferrer">2020</a>,{" "}
        <a href="http://2022.kernelcon.org/agenda" className="text-highlight" target="_blank" rel="noopener noreferrer">2022</a>,{" "}
        <a href="http://2023.kernelcon.org/agenda" className="text-highlight" target="_blank" rel="noopener noreferrer">2023</a>,{" "}
        <a href="http://2024.kernelcon.org/agenda" className="text-highlight" target="_blank" rel="noopener noreferrer">2024</a>,{" "}
        or{" "}
        <a href="http://2025.kernelcon.org/agenda" className="text-highlight" target="_blank" rel="noopener noreferrer">2025</a>{" "}
        programs for inspiration.
      </p>

      {/* Important Dates */}
      <p className="tab-heading">Important Dates</p>
      <p className="tab-paragraph">
        CFP dates can always be found on our{" "}
        <a href="/dates" className="text-highlight" target="_blank" rel="noopener noreferrer">important dates page</a>.
        Check often so you don’t miss the window to submit your talk!
      </p>

      {/* Suggested Topic Areas */}
      <p className="tab-heading">Suggested Topic Areas</p>
      <p className="tab-paragraph">
        The theme for Kernelcon 2026 is <strong>“Off the Grid”</strong> — embracing
        self‑reliance, stealth, and surviving in both the physical and digital wild.
        Whether you’re hiding from the grid or just camping with a laptop, we want your
        stories.
      </p>
      <p className="tab-paragraph">
        Kernelcon submissions should focus on topics that interest the security and
        hacking communities. Ideas include:
      </p>
      <ul className="real-bullet-list">
        <li>Hacking software and hardware in remote or field conditions</li>
        <li>Incident response in disconnected or hostile environments</li>
        <li>Operational security for off‑grid living</li>
        <li>Solar/battery powered homelabs and survival tech</li>
        <li>Field communications: mesh, LoRa, satellite, and HF radio</li>
        <li>Data storage and exfiltration while undetected</li>
        <li>Repurposing and ruggedizing computing hardware</li>
        <li>Security education for low‑connectivity or nomadic environments</li>
        <li>Security and hacking capture‑the‑flag scenarios outdoors</li>
        <li>Digital forensics in off‑network investigations</li>
        <li>Privacy, anonymity, and disappearing from the map</li>
        <li>Practical security while traveling or camping</li>
        <li>Machine learning in limited‑power, remote scenarios</li>
        <li>War stories from stealth ops and unplugged exploits</li>
        <li>Risk management when you’re your own IT department</li>
        <li>BeyondCorp / Zero Trust for small, distributed teams</li>
      </ul>
      <p className="tab-paragraph">
        If your talk doesn’t perfectly fit these categories but aligns with the off‑grid
        or stealth theme, please submit! We encourage creativity and first‑time speakers.
      </p>

      {/* Conference Format */}
      <p className="tab-heading">Conference Format</p>
      <p className="tab-paragraph">
        Kernelcon 2026 will feature two concurrent main tracks. Talks may be 60 minutes
        (FULL) or 20 minutes (SHORT). Presentations typically run 50 or 15 minutes,
        leaving time for questions.
      </p>
      <p className="tab-paragraph">
        Speakers will present from a standard hotel conference space with provided AV
        equipment, including projector, microphone, and internet access.
      </p>

      {/* Speaker Benefits */}
      <p className="tab-heading">Speaker Benefits</p>
      <p className="tab-paragraph">
        Speakers receive complimentary admission to Kernelcon and a special “SPEAKER”
        badge. Accepted speakers may attend the exclusive speaker party.
      </p>
      <p className="tab-paragraph">FULL talk speakers may also choose one of the following:</p>
      <ul className="real-bullet-list">
        <li>2 additional “HACKER” registrations</li>
        <li>$200 donation to the EFF or Hackers for Charity</li>
        <li>$200 honorarium</li>
        <li>Reinvest in making Kernelcon even better next year</li>
      </ul>
      <p className="tab-paragraph">
        Backup/alternate talks may also be tentatively accepted. These speakers will
        receive admission and may be asked to present if needed.
      </p>

      {/* Review Process */}
      <p className="tab-heading">Review Process</p>
      <p className="tab-paragraph">
        Our review process is informal but confidential. Submissions are reviewed by
        multiple Technical Program Committee members for novelty, quality, and alignment
        with the off‑grid theme. The TPC informs the Chairs, who finalize the program.
      </p>
      <p className="tab-paragraph">
        Novel, new, and on‑theme talks are highly preferred. First‑time speakers are
        encouraged to submit. Vendor pitches or recycled talks are unlikely to be
        accepted.
      </p>

      {/* How to Submit */}
      <p className="tab-heading">How to Submit</p>
      <p className="tab-paragraph">Speakers must submit directly; no PR reps permitted.</p>
      <p className="tab-paragraph">
        Information you’ll need for your submission:
      </p>
      <ul className="real-bullet-list no-bullets">
        <li><input className="fake-checkbox" type="checkbox" /> Speaker name(s), pseudonym(s), or handle(s)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Company or affiliation (optional)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Speaker headshot</li>
        <li><input className="fake-checkbox" type="checkbox" /> Contact info (email, social, phone)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Promotion info (optional for tagging)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Presentation title</li>
        <li><input className="fake-checkbox" type="checkbox" /> Timeslot (20 or 60 min)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Abstract (≤1200 characters)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Speaker bio (≤500 characters)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Technical level (1–5)</li>
        <li><input className="fake-checkbox" type="checkbox" /> Detailed description with demos, exploits, or releases if applicable</li>
        <li><input className="fake-checkbox" type="checkbox" /> Honorarium choice (donate, 2 regs, cash, reinvest)</li>
      </ul>
      <p className="tab-paragraph">
        Questions? Email{" "}
        <a href="mailto:cfp@kernelcon.org" className="text-highlight" target="_blank" rel="noopener noreferrer">
          cfp@kernelcon.org
        </a>.
      </p>
      <p className="tab-paragraph">
        Supplementary files like draft slides, outlines, or whitepapers may also be
        included via URL (Dropbox, Drive, etc.).
      </p>

      {/* Grant of Copyright */}
      <p className="tab-heading">Grant of Copyright Use</p>
      <p className="tab-paragraph">
        I warrant that this work has not been previously published elsewhere, or that I
        have obtained permission for Kernelcon to publish it. If selected, I grant
        Kernelcon permission to record, duplicate, and distribute my presentation in any
        format for educational and online purposes.
      </p>
      <p className="tab-paragraph">
        By submitting your talk proposal, you agree to the Grant of Copyright Use.
      </p>

      {/* Terms of Speaking */}
      <p className="tab-heading">Terms of Speaking Requirements</p>
      <ol className="real-bullet-list">
        <li>I will provide completed slides, code, and references by the deadline.</li>
        <li>I will submit any revisions to my title, abstract, and bio by March 3, 2026.</li>
        <li>I will complete my talk within the allocated time.</li>
        <li>I understand the venue provides projector, mic, and internet; I supply all else.</li>
        <li>I am responsible for my own hotel and travel expenses.</li>
      </ol>
      <p className="tab-paragraph">
        By submitting your talk proposal, you agree to these Terms of Speaking.
      </p>
    </div>
  </div>
</div>

);
}
}
