import React, { Component } from "react";
// import ContrastDarkMode from "../../static/images/sponsors/contrast-dark-logo.png";
// import ContrastLightMode from "../../static/images/sponsors/contrast-light-logo.png";
// import ECS from "../../static/images/sponsors/ECS.png";
// import NoStarchPress from "../../static/images/sponsors/no-starch-logo.png";
// import ToooLDarkMode from "../../static/images/sponsors/toool-light-logo.png";
// import TooolLightMode from "../../static/images/sponsors/toool-dark-logo.png";
// import Fnbo from "../../static/images/sponsors/fnbo.png";
// import CheckPoint from "../../static/images/sponsors/checkpoint-dark-logo.png";
// import AppGateDark from "../../static/images/sponsors/appgate-dark-logo.png";
// import AppGateLight from "../../static/images/sponsors/appgate-light-logo.png";
// import RedCanary from "../../static/images/sponsors/red_canary.png";
// import AWSDark from "../../static/images/sponsors/AWS_black.png";
// import AWSLight from "../../static/images/sponsors/AWS-color.png";
// import Netsecuris from '../../static/images/sponsors/Netsecuris.jpg';
// import ConAgraLight from "../../static/images/sponsors/conagra-light-logo.webp";
// import ConAgraDark from "../../static/images/sponsors/conagra-dark-logo.png";
// import Protiviti from "../../static/images/sponsors/protiviti.png";
// import ZScaler from "../../static/images/sponsors/zscaler.png";
// import BairdHolm from "../../static/images/sponsors/bairdholm.png";
// import GuidepointDark from "../../static/images/sponsors/guidepoint_black.png";
// import GuidepointDark from "../../static/images/sponsors/GPS.png";
// import Tanium from "../../static/images/sponsors/Tanium.png";
// import Axonius from "../../static/images/sponsors/Axonius.png";
// import Wiz from "../../static/images/sponsors/wiz.png";
// import Code42 from "../../static/images/sponsors/code42.png";
// import FarmCreditDark from "../../static/images/sponsors/farm-credit-dark-mode.png";
// import FarmCreditLight from "../../static/images/sponsors/farm-credit-light-mode.png";
// import MentalHealthHackersDark from "../../static/images/logos/MHH-white.png"
// import MentalHealthHackersLight from "../../static/images/logos/MHH.png"
// import SecureSkyDark from "../../static/images/sponsors/securesky-dark.png"
// import SecureSkyLight from "../../static/images/sponsors/securesky-light.png"
// import TrailOfBitsDark from "../../static/images/sponsors/trailofbits-dark-mode.png"
// import TrailOfBitsLight from "../../static/images/sponsors/trailofbits-light-mode.png"
// import EvolvingSolDark from "../../static/images/sponsors/evolving-sol-dark-mode.png"
// import EvolvingSolLight from "../../static/images/sponsors/evolving-sol-light-mode.png";
// import Falkor from "../../static/images/sponsors/FS_Purple.png";
// import TekSystems from "../../static/images/logos/teksystems.png"
// import ExpelDark from "../../static/images/sponsors/expel-dark-mode.png"
// import ExpelLight from "../../static/images/sponsors/expel-light-mode.png"
// import AmazonDark from "../../static/images/sponsors/amazon-dark-mode.png"
// import AmazonLight from "../../static/images/sponsors/amazon-light-mode.png"
// import Turngate from "../../static/images/sponsors/turn-gate.png"
// import Phosphorus from "../../static/images/sponsors/phosphorus.png"
// import RecordedFuture from "../../static/images/sponsors/recorded-future.png"
// import Runza from "../../static/images/sponsors/runza-logo-tagline.png"
// import CyberCityCircuits from "../../static/images/logos/cyber_city_circuits_logo.png"
// import EthicalIntruder from '../../static/images/sponsors/ethical_intruder_logo.jpg'
// import CSO from '../../static/images/sponsors/cso.png'
// import Shamar from '../../static/images/sponsors/shamar.png'
// import SentOneWhite from '../../static/images/sponsors/sentone_white.png'
// import SHIWhite from '../../static/images/sponsors/shi_white.png'
// import SHIDark from '../../static/images/sponsors/shi_dark.png'
// import Cyera_Light from '../../static/images/sponsors/Cyera_Logo_Inverted.png'
// import Cyera_Dark from '../../static/images/sponsors/Cyera_Logo_Primary.png'
// import CyberArk_Light from '../../static/images/sponsors/cyberark-light.png'
// import CyberArk_Dark from '../../static/images/sponsors/cyberark-dark.png' 
// import ZScalar_Light from '../../static/images/sponsors/zscalar-light.png'
// import ZScalar_Dark from '../../static/images/sponsors/zscalar-dark.svg' 

import "./Sponsors.scss";

export default class Sponsors extends Component {
	static displayName = "Sponsors";

	render() {
		return (
      <div className="container">
        <div className='venue-section'>
          <div className="sponsors">
            <div>
              <h3>Sponsorship</h3>
              <div className="text-block">
                <p>
                  We understand your products and services play an
                  important part in our security and we can’t put on
                  this conference without your help. The Omaha
                  metropolitan area is home to 45,000 businesses,
                  including Fortune 500 companies, large financial
                  companies, global technology service providers, the
                  University of Nebraska system, and important U.S.
                  Armed forces operations. If you’re not already doing
                  business in Omaha, you should be.
                </p>
                <p>
                  Get your name and product in front of hundreds of
                  security professionals and key decision makers with
                  a Kernelcon sponsorship. We will be happy to work
                  with you on details of your sponsorship, options
                  available and sponsorship fees.
                </p>
                <p>
                  While we do appreciate our sponsors, please
                  understand that Kernelcon is first and foremost for
                  our attendees so we can only accept sponsors who
                  have their best interests in mind.
                </p>
                <div className="tab-title">
                  Sponsorships are now available. Please contact{" "}
                  <a
                    href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
                    style={{ textDecoration: "underline" }}
                    target="_top">
                    sponsor@kernelcon.org
                  </a>
                  .
                </div>
              </div>
            </div>
            <div>
              <h3 className="title">Sponsor a Student</h3>
              <div className="text-block">
                <h4>
                  Interested in sponsoring a student for this year's
                  Kernelcon?
                </h4>
                <p>
                  With your assistance, Kernelcon hopes to sponsor up
                  to 50 students this year. In addition to entry for
                  you, your money will help pay for a student’s
                  admission, hotel room (for traveling students), and
                  this year’s “hacker education kit”.
                </p>
                <div className="tab-title">
                  Would you like to hear more? Please contact{" "}
                  <a
                    href="mailto:sponsor@kernelcon.org?Subject=Sponorship"
                    style={{ textDecoration: "underline" }}
                    target="_top">
                    sponsor@kernelcon.org
                  </a>
                  .
                </div>
              </div>
            </div>
            <div className="spons-page">
              <div className="text-block">
          
                <div className="past-sponsors">
                  <span className="sponsors-label">Past Sponsors:</span>
                  <span className="sponsor-year">
                    <a href="https://2025.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2025</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2024.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2024</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2023.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2023</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2022.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2022</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2021.kernelcon.org/#sponsors" target="_blank" rel="noopener noreferrer">2021</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2020.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2020</a>
                  </span>
                  <span className="sponsor-separator">|</span>
                  <span className="sponsor-year">
                    <a href="https://2019.kernelcon.org/sponsors/" target="_blank" rel="noopener noreferrer">2019</a>
                  </span>
                </div>
              </div>

              <div className="text-block spons-groups">
                {/* Diamond Sponsors */}
                {/* <div className='spons-block'>
                  <h2 className='diamond spons-title'>Diamond</h2>
                  <div className='gp-logo'>
                    <a href="https://www.guidepointsecurity.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='all-bright dark-mode-logo'>
                      <img src={GuidepointDark}
                        className='spons-img plat-spons'
                        alt="Guidepoint Security"/>
                    </a>
                    <a href="https://www.guidepointsecurity.com/"
                      target="_blank"
                      rel='noopener noreferrer'
                      className='light-mode-logo'>
                      <img src={GuidepointDark}
                        className='spons-img plat-spons'
                        alt="Guidepoint Security"/>
                    </a>
                  </div>
                </div> */}

                {/* Gold Sponsors */}
                {/* <div className='spons-block'>
                  <h2 className='gold spons-title'>Gold</h2>
                  <a href="https://www.amazon.jobs/content/en/teams/amazon-security"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={AmazonLight}
                      className='spons-img silver-spons'
                      alt="Amazon Security"/>
                  </a>
                  <a href="https://www.amazon.jobs/content/en/teams/amazon-security"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={AmazonDark}
                      className='spons-img silver-spons'
                      alt="Amazon Security"/>
                  </a>
                  <a href="https://www.fcsamerica.com/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={FarmCreditLight}
                      className='spons-img gold-spons'
                      alt="Farm Credit"/>
                  </a>
                  <a href="https://www.fcsamerica.com/"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={FarmCreditDark}
                      className='spons-img gold-spons'
                      alt="Farm Credit"/>
                  </a>
                  <a href="https://www.wiz.io/"
                    target="_blank"
                    className='all-bright dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={Wiz}
                      className='spons-img gold-spons'
                      alt="Wiz"/>
                  </a>
                  <a href="https://www.wiz.io/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={Wiz}
                      className='spons-img gold-spons'
                      alt="Wiz"/>
                  </a>
                  <a href="https://www.ethicalintruder.com/"
                    target="_blank"
                    className=''
                    rel='noopener noreferrer'>
                    <img src={EthicalIntruder}
                      className='spons-img gold-spons'
                      alt="Ethical Intruder"/>
                  </a>
                  <a href="https://ecstech.com/"
                    target="_blank"
                    className=''
                    rel='noopener noreferrer'>
                    <img src={ECS}
                      className='spons-img gold-spons'
                      alt="Ethical Intruder"/>
                  </a>
                  <a href="https://www.conagrabrands.com/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={ConAgraDark}
                      className='spons-img gold-spons'
                      alt="Conagra"/>
                  </a>
                  <a href="https://www.conagrabrands.com/"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={ConAgraLight}
                      className='spons-img gold-spons'
                      alt="Conagra"/>
                  </a>
                  <div className='sub-party-logos'>
                    <span className='sub-party-logos'>
                      <a href="https://www.sentinelone.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='dark-mode-logo'>
                        <img src={SentOneWhite}
                          className='spons-img sub-party-spons'
                          alt="Sentinel One"/>
                      </a>
                      <a href="https://www.sentinelone.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='all-dark light-mode-logo'>
                        <img src={SentOneWhite}
                          className='spons-img sub-party-spons'
                          alt="Sentinel One"/>
                      </a>
                      <a href="https://www.shi.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='dark-mode-logo'>
                        <img src={SHIWhite}
                          className='spons-img sub-party-spons'
                          alt="SHI"/>
                      </a>
                      <a href="https://www.shi.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={SHIDark}
                          className='spons-img sub-party-spons'
                          alt="SHI"/>
                      </a>
                      <a href="https://www.cyberark.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='dark-mode-logo'>
                        <img src={CyberArk_Light}
                          className='spons-img sub-party-spons'
                          alt="CyberArk"/>
                      </a>
                      <a href="https://www.cyberark.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={CyberArk_Dark}
                          className='spons-img sub-party-spons'
                          alt="CyberArk"/>
                      </a>
                    </span>
                  </div>
                </div> */}

                {/* Silver Sponsors */}
                {/* <div className='spons-block'>
                  <h3 className='silver spons-title'>Silver</h3>
                  <a href="https://www.contrastsecurity.com/"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={ContrastDarkMode}
                      className='spons-img other-spons'
                      alt="Contrast"/>
                  </a>
                  <a href="https://www.contrastsecurity.com/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={ContrastLightMode}
                      className='spons-img other-spons'
                      alt="Contrast"/>
                  </a>
                  <a href="https://www.cyera.io/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='dark-mode-logo'>
                    <img src={Cyera_Light}
                      className='spons-img other-spons'
                      alt="Cyera"/>
                  </a>
                  <a href="https://www.cyera.io/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='light-mode-logo'>
                    <img src={Cyera_Dark}
                      className='spons-img other-spons'
                      alt="Cyera"/>
                  </a>
                </div> */}

                {/* Bronze Sponsors */}
                {/* <div className='spons-block'>
                  <h4 className='bronze spons-title'>Bronze</h4>
                  <a href="https://www.turngate.io/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='all-bright dark-mode-logo'>
                    <img src={Turngate}
                      className='spons-img other-spons'
                      alt="Wiz"/>
                  </a>
                  <a href="https://www.turngate.io/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='light-mode-logo'>
                    <img src={Turngate}
                      className='spons-img other-spons'
                      alt="Turngate"/>
                  </a>
                  <a href="https://www.zscaler.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='dark-mode-logo'>
                    <img src={ZScalar_Light}
                      className='spons-img other-spons'
                      alt="ZScalar"/>
                  </a>
                  <a href="https://www.zscaler.com/"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='light-mode-logo'>
                    <img src={ZScalar_Dark}
                      className='spons-img other-spons'
                      alt="ZScalar"/>
                  </a>
                </div> */}

                {/* CTF Sponsors */}
                {/* <div className='spons-block'>
                  <h4 className='ctf-spons spons-title'>CTF Sponsors</h4>
                  <a href="https://www.shamarinfosec.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Shamar}
                      className='all-bright dark-mode-logo spons-img other-spons'
                      alt="Shamar"/>
                  </a>
                  <a href="https://www.shamarinfosec.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Shamar}
                      className='light-mode-logo spons-img other-spons'
                      alt="Shamar"/>
                  </a>
                </div> */}

                {/* Other Sponsors */}
                {/* <div className='spons-block'>
                  <h4 className='gold spons-title'>Other Sponsors</h4>
                  <a href="https://toool.us/"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={ToooLDarkMode}
                      className='spons-img other-spons'
                      alt="TOOOL"/>
                  </a>
                  <a href="https://toool.us/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={TooolLightMode}
                      className='spons-img other-spons'
                      alt="TOOOL"/>
                  </a>
                  <a href="https://www.falkorsecurity.com/"
                    target="_blank"
                    className=''
                    rel='noopener noreferrer'>
                    <img src={Falkor}
                      className='spons-img other-spons'
                      alt="Falkor Security"/>
                  </a>
                  <a href="https://www.mentalhealthhackers.org/"
                    target="_blank"
                    className='dark-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={MentalHealthHackersDark}
                      className='spons-img other-spons'
                      alt="Mental Health Hackers"/>
                  </a>
                  <a href="https://www.mentalhealthhackers.org/"
                    target="_blank"
                    className='light-mode-logo'
                    rel='noopener noreferrer'>
                    <img src={MentalHealthHackersLight}
                      className='spons-img other-spons'
                      alt="Mental Health Hackers"/>
                  </a>
                  <a href="https://www.teksystems.com/en/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={TekSystems}
                      className='spons-img other-spons'
                      alt="TEKsystems"/>
                  </a>
                  <a href="https://www.runza.com/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    <img src={Runza}
                      className='spons-img other-spons'
                      alt="Runza"/>
                  </a>
                  <br />
                </div> */}

                {/* Food & Beverage Sponsors */}
                {/* <div className='spons-block'>
                  <div className='foodbev-spons'>
                    <div className='single-foodbev-spons'>
                      <h6 className='text-highlight spons-title'>Popcorn</h6>
                      <a href="https://cybercitycircuits.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='all-bright dark-mode-logo'>
                        <img src={CyberCityCircuits}
                          className='spons-img fdbev-spons'
                          alt="CyberCityCircuits"/>
                      </a>
                      <a href="https://cybercitycircuits.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={CyberCityCircuits}
                          className='spons-img fdbev-spons'
                          alt="CyberCityCircuits"/>
                      </a>
                      <a href="https://securesky.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={SecureSkyLight}
                          className='spons-img fdbev-spons'
                          alt="SecureSky"/>
                      </a>
                      <a href="https://securesky.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='dark-mode-logo'>
                        <img src={SecureSkyDark}
                          className='spons-img fdbev-spons'
                          alt="SecureSky"/>
                      </a>
                      <a href="https://cybersecurityomaha.com/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className=''>
                        <img src={CSO}
                          className='spons-img fdbev-spons'
                          alt="CyberSecurityOmaha"/>
                      </a>
                    </div>
                  </div>
                </div> */}

                {/* Coffee Sponsors */}
                {/* <div className='spons-block'>
                  <div className='foodbev-spons'>
                    <div className='single-foodbev-spons'>
                      <h6 className='text-highlight spons-title'>Coffee</h6>
                      <a href="https://www.turngate.io/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='all-bright dark-mode-logo'>
                        <img src={Turngate}
                          className='spons-img fdbev-spons'
                          alt="Wiz"/>
                      </a>
                      <a href="https://www.turngate.io/"
                        target="_blank"
                        rel='noopener noreferrer'
                        className='light-mode-logo'>
                        <img src={Turngate}
                          className='spons-img fdbev-spons'
                          alt="Turngate"/>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
