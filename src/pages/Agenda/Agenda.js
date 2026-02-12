import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
// import Speakers from './Speakers/Speakers';
// import Talks from './Talks/Talks';

// import TalksSchedule from './TalksSchedule/TalksSchedule';
// import ConSchedule from './ConSchedule'
// import TrainingSubmissions from './TrainingSubmission';
// import Workshops from './Workshops';

import CallOuts from '../../components/CallOuts/CallOuts';
import Ray from "../../static/images/speakers/RayRedacted.png";

import villageConfig from 'villageConfig';
import competitionConfig from 'competitionConfig';

import './Agenda.scss';

export default class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'villages' // default tab if none specified
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
      this.setState({ defaultTab: tabId || 'villages' });
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
          {/* <Tab tabFor="schedule">Schedule</Tab> */}
          <Tab tabFor="keynotes">Keynotes</Tab>
          {/* <Tab tabFor="speakers">Speakers</Tab> */}
          {/* <Tab tabFor="talks">Talks</Tab> */}
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          {/* <Tab tabFor="activities">Activities</Tab> */}
          {/* <Tab tabFor="entertainment">Entertainment</Tab> */}
          {/* <Tab tabFor="careers">Careers</Tab> */}
        </TabList>
        {/* TabPanels for schedule, keynotes, speakers, talks, entertainment, and careers are commented out for now */}

        <TabPanel tabId="keynotes">
          <div className='text-area'>
            <h3 className='title'>Keynotes</h3>
            <div className='keynote-section'>
              <div className='keynote-left'>
                <h4 className='keynote-name'>Ray Redacted</h4>
                <div className='keynote-subtitle'>
                  <div className='keynote-handle'>
                    <a href='https://twitter.com/RayRedacted' target="_blank" rel="noopener noreferrer">
                      @RayRedacted
                    </a>
                  </div>
                </div>

                <div className='keynote-bio'>
                  <p className='tab-paragraph'>Ray Redacted is an information security researcher, educator, executive, and proud father who has grown up in the hacker community. Renowned for his clear, human-centered approach to complex technical challenges, Ray emphasizes trust, resilience, and the tangible impact of technology. He aims to engage Kernelcon attendees in discussions about exploring failure, forgiveness, and accountability alongside exploits and defenses, and how small, thoughtful actions can lead to significant change. As a proud father and lifelong learner, Ray shares the lessons his son imparts to him, encouraging him to "lift others as you climb." </p>
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
                <img src={Ray}
                  alt="Ray Redacted"
                  className='keynote-image'/>
              </div>
            </div>
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


        {/* <TabPanel tabId="entertainment">
          <div className='text-area'>

            <CallOuts title='Entertainment' config={entertainmentConfig} />

          </div>
        </TabPanel> */}


        {/* <TabPanel tabId="activities">
          <div className='text-area'>

            <CallOuts title='Activities' config={activityConfig} />

          </div>
        </TabPanel> */}

        {/* <TabPanel tabId="careers">
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
        </TabPanel> */}
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
