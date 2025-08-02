import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import Speakers from './Speakers/Speakers';
import Talks from './Talks/Talks';

import TalksSchedule from './TalksSchedule/TalksSchedule';
// import ConSchedule from './ConSchedule';
// import TrainingSubmissions from './TrainingSubmission';
// import Workshops from './Workshops';

import CallOuts from '../../components/CallOuts/CallOuts';
import JeffMan from "../../static/images/speakers/JeffMan.jpg";
import Gabrielle from "../../static/images/speakers/GabrielleHempel.jpg";
import JaysonStreet from "../../static/images/speakers/JaysonStreet.jpg";

import villageConfig from 'villageConfig';
import competitionConfig from 'competitionConfig';
import entertainmentConfig from 'entertainmentConfig';
import activityConfig from 'activityConfig';

import './Agenda.scss';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'schedule' // default tab if none specified
    }
  }

  componentDidMount() {
    const { tabId } = this.props.match.params;
    if (tabId) {
      this.setState({ defaultTab: tabId });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.tabId !== prevProps.match.params.tabId) {
      const { tabId } = this.props.match.params;
      this.setState({ defaultTab: tabId || 'schedule' });
    }
  }

  changeTab(tabId) {
    this.props.history.push(`/agenda/${tabId}`);
  }

  getTabs(vert) {
    return (
      <Tabs 
        defaultTab={this.state.defaultTab}
        onChange={(tabId) => this.changeTab(tabId)}
        vertical={vert}
      >
        <TabList>
          <Tab tabFor="schedule">Schedule</Tab>
          <Tab tabFor="keynotes">Keynotes</Tab>
          <Tab tabFor="speakers">Speakers</Tab>
          <Tab tabFor="talks">Talks</Tab>
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          <Tab tabFor="activities">Activities</Tab>
          <Tab tabFor="entertainment">Entertainment</Tab>
          <Tab tabFor="careers">Careers</Tab>
        </TabList>
        <TabPanel tabId="schedule">
          <div className='text-area'>
          	<TalksSchedule />
          </div>
        </TabPanel>
        <TabPanel tabId="keynotes">
          <div className='text-area'>
            <h3 className='title'>Keynotes</h3>
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Gabrielle Hempel</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='https://www.exabeam.com/' target="_blank" rel="noopener noreferrer">
                      Exabeam
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/gabsmashh' target="_blank" rel="noopener noreferrer">
                      @gabsmashh
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>Gabrielle Hempel is a cybersecurity strategist specializing in security operations, threat detection, and compliance. She is the Security Operations Strategist at Exabeam, where she works across the SOC, AppSec, and GRC teams to strengthen internal security.</p>
                  <p className='tab-paragraph'>Beyond her technical expertise, Gabrielle is a Flotilla Staff Officer with the U.S. Coast Guard Cyber Auxiliary and a member of the Marine Corps Cyber Auxiliary. She holds a master's in global security and cybersecurity from NYU, is pursuing a law degree at Purdue University with a focus on technology law, and serves as an adjunct professor in cybersecurity policy and management at UMGC. A speaker at conferences like BlackHat and DEF CON, Gabrielle is passionate about bridging the gap between cybersecurity strategy, policy, and real-world implementation.</p>
                </div>

                {/* <div className='keynote-talk'>
                  <div className='keynote-topic'>In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks.</p>
                    <p className='tab-paragraph'>There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it.</p>
                    <p className='tab-paragraph'>However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly.</p>
                    <p className='tab-paragraph'>To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.</p>
                  </div>
                </div> */}
              </div>
              <div className='keynote-right'>
                <img src={Gabrielle}
                  alt="Gabrielle Hempel"
                  className='keynote-image'/>
              </div>
            </div>
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Jayson Street</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='https://www.secureyeti.com/' target="_blank" rel="noopener noreferrer">
                      Secure Yeti
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/jaysonstreet' target="_blank" rel="noopener noreferrer">
                    @jaysonstreet
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>Dubbed a "notorious hacker" by FOX25 Boston, "World Class Hacker" by National Geographic Breakthrough Series, a "paunchy hacker" by Rolling Stone Magazine and, as a "Change Agent" by the Director of Counter Intelligence at the Pentagon, Jayson Street prefers if people just refer to him simply as a Hacker, Helper & Human.</p>
                  <p className='tab-paragraph'>Jayson is a Simulated Adversary for hire. The author of the "Dissecting the hack: Series" (which is currently required reading at 7 colleges in 4 countries that he knows of). Also the DEF CON Groups Global Ambassador. He's spoken at conferences & summits in over 50 countries such as DEF CON, Le Hack, GISEC, IT-Defense, SYSCAN and at several other 'CONs & colleges on a variety of Cyber Security/Hacking subjects. He also was asked to speak at the Pentagon on his revolutionary process of Situational Awareness training.</p>
                  <p className='tab-paragraph'>He loves to explore the world & networks as much as he can. He has successfully robbed banks, hotels, government facilities, Biochemical companies, etc.. on five continents (Only successfully robbing the wrong bank in Lebanon once all others he was supposed to)!</p>
                  <p className='tab-paragraph'>*Jayson is a highly carbonated speaker who has partaken of Pizza from Bulgaria to Brazil & China to The Canary Islands. He does not expect anybody to still be reading this far but if they are please note he was proud to be chosen as one of Time's persons of the year for 2006.</p>
                </div>

                {/* <div className='keynote-talk'>
                  <div className='keynote-topic'>In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks.</p>
                    <p className='tab-paragraph'>There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it.</p>
                    <p className='tab-paragraph'>However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly.</p>
                    <p className='tab-paragraph'>To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.</p>
                  </div>
                </div> */}
              </div>
              <div className='keynote-right'>
                <img src={JaysonStreet}
                  alt="Jayson Street"
                  className='keynote-image'/>
              </div>
            </div>
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Jeff Man</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='https://www.obsglobal.com/' target="_blank" rel="noopener noreferrer">
                      Online Business Systems
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://www.linkedin.com/in/jeffreyeman/' target="_blank" rel="noopener noreferrer">
                      /in/jeffreyeman/
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  {/* <p className='keynote-bio-subtitle'>We all loved watching him <a className="text-highlight" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=AQpv_6Se6VM&list=PL9RA5HoG1guy7oz3m4Y0aHqsNumai2o8v&index=6">reverse engineer hardware components in Hack Live</a>. And now he's back as our 2022 Keynote Speaker... please welcome, Joe Grand!</p> */}
                  <p className='keynote-para'>Jeff is a respected Information Security advocate, advisor, hacker, evangelist, mentor, teacher, international keynoter, speaker, former host of Security & Compliance Weekly, co-host on Paul's Security Weekly, Tribe of Hackers (TOH) contributor, including Red Team, Security Leaders, and Blue Team editions, and a member of the Cabal of the Curmudgeons. Jeff currently serves as a PCI QSA and Trusted Advisor for Online Business Systems, also a Grant Advisory Board Member for the Gula Tech Foundation, Advisory Board Member for the Technology Advancement Center (TAC), and is the Director of Diversity, Equity, and Inclusion for Hak4Kidz NFP. Over 40 years of experience working in all aspects of computer, network, and information security, including cryptography, risk management, vulnerability analysis, compliance assessment, forensic analysis and penetration testing. Certified National Security Agency Cryptanalyst. Designed and fielded the first software-based cryptosystem ever produced by NSA. Inventor of the "whiz" wheel, a cryptologic cipher wheel used by US Special Forces for over a decade currently on display at the National Cryptologic Museum. Honorary lifetime member of the Special Forces Association. Previously held security research, management and product development roles with the National Security Agency, the DoD and private-sector enterprises. Pioneering member of the first penetration testing "red team" at NSA. For the past twenty-eight years has been a pen tester, security architect, consultant, QSA, and PCI SME, providing consulting and advisory services to many of the nation's best known companies.</p>
                </div>

                <div className='keynote-talk'>
                  <div className='keynote-topic'>The State of Information Security Today</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>The intent of this talk is to take a macro level look at the state of the information security industry today based on my 40+ years' experience in the business - including nearly 30 years as a consultant to hundreds of commercial enterprises. I began my career at the National Security Agency and was a pioneer in penetration testing and vulnerability assessment methodologies for both DoD and Civil agencies. I begin with a review of where we stand today and discuss the key reasons why so many organizations are failing. I then offer the solution to what companies need to do if they truly want to be secure and how our industry can be part of the solution.</p>
                  </div>
                </div>
               </div>
               <div className='keynote-right'>
                <img src={JeffMan}
                  alt='Jeff Man'
                  className='keynote-image'/>
               </div>
            </div>
            {/* <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>John Hultquist</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-company'>
                    <a href='' target="_blank" rel="noopener noreferrer">
                      Mandiant Intelligence
                    </a>
                  </div>
                  <div className='keynote-div'>|</div>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/johnhultquist' target="_blank" rel="noopener noreferrer">
                    @JohnHultquist
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>John Hultquist is Chief Analyst of Mandiant Intelligence at Google Cloud. Prior to the acquisition of iSIGHT Partners by FireEye/Mandiant, John led iSIGHT's cyber espionage practice, where his team uncovered the Russian threat actor best known as Sandworm. John previously worked at State Department and Defense Intelligence Agency. He is an Adjunct Professor at Johns Hopkins University and the founder of CYBERWARCON and SLEUTHCON. John is also a veteran of the US Army.</p>
                </div>

                <div className='keynote-talk'>
                  <div className='keynote-topic'>In Search of Lost Bytes: Hardware Implants and the Trouble with Supply Chains</div>
                  <div className='keynote-abstract'>
                    <p className='tab-paragraph'>Digital markets have quickly grown to international proportions, complexities in materials, development, and distribution have developed accordingly, resulting in market efficiency and, often overlooked, incalculable risks.</p>
                    <p className='tab-paragraph'>There is a fine line between acceptable and irreconcilable risk, while some risks are mitigatable, others are not, and ignoring the facts has disproportionate consequences. This presentation will explore modern supply chain security risks through a technical deep dive of 5G infrastructure and the political battles surrounding it.</p>
                    <p className='tab-paragraph'>However, a wider acknowledgment of the supply chain problem doesn’t make it go away. We need to understand the inherent hardware vulnerabilities exposed. Currently, confidence in hardware security relies too much implicit trust — overlooking serious threats. Assurance in this area is hard won, manual, and costly.</p>
                    <p className='tab-paragraph'>To highlight this, several hardware implant techniques will be discussed, showcasing various attack methods as well as the point at which they are most likely to be exploited in a standard supply chain.</p>
                  </div>
                </div>
              </div>
              <div className='keynote-right'>
                <img src={John}
                  alt="John Hultquist"
                  className='keynote-image'/>
              </div>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel tabId="speakers" className="speakers">
          <div className='text-area'>
            <h3 className='title'>Speakers</h3>
            <Speakers />
          </div>
        </TabPanel>
        <TabPanel tabId="talks" className="talks">
          <div className='text-area'>
            <h3 className='title'>Talks</h3>
            <Talks />
          </div>
        </TabPanel>


        <TabPanel tabId="villages">
          <div className='text-area'>
            
            <CallOuts title='Villages' config={villageConfig} />

          </div>
        </TabPanel>

        <TabPanel tabId="competitions">
          <div className='text-area'>

            <CallOuts title='Competitions' config={competitionConfig} />

          </div>
        </TabPanel>


        <TabPanel tabId="entertainment">
          <div className='text-area'>

            <CallOuts title='Entertainment' config={entertainmentConfig} />

          </div>
        </TabPanel>


        <TabPanel tabId="activities">
          <div className='text-area'>

            <CallOuts title='Activities' config={activityConfig} />

          </div>
        </TabPanel>

        <TabPanel tabId="careers">
          <div className='text-area'>
            <h3 className='title'>Careers</h3>            
            <div className='competition-area'>
              <div className='competition-section'>
                <div className='competition-description'>
                  Did you know your should update your resume every six months, even if you’re not looking for a new job?  Have a recruiting expert take a look at your resume and assist with advice on making it the best it can be.
                  <p style={{marginTop: '18px'}}>TEKsystems volunteers will be here on Thursday and Friday at the Kernelcon Resume Review table within the village area to provide professional resume review assistance. Attendees are welcome to walk up to the table at any point throughout the day and should expect to spend 15-20 minutes discussing resume updates.</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    );
  }

  render() {
    return (
      <div className='container'>
      <div className="venue-section">
			<div className="con-page">
				<div className="text-area">
          <h3 className='title'>Agenda</h3>
            <MediaQuery minDeviceWidth={1000}>
              {this.getTabs(true)}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={999}>
              {this.getTabs(false)}
            </MediaQuery>
        </div>
        </div>
        </div>
      </div>
    );
  }
}