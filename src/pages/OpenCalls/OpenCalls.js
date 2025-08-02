import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import Villages from './Villages';
import './OpenCalls.scss';
// import Stickers from '../../static/images/sticker-sheet-proof.png';

import CFP from '../CFP/CFP';

export default class OpenCalls extends Component {
  static displayName = 'OpenCalls';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'papers'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'papers';
    this.setState({
      defaultTab: defaultTab
    });
  }

  changeTab(tabId) {
    window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
  }

  getTabs(vert) {
    return (
      <div className="container">
        <Tabs defaultTab={this.state.defaultTab}
          onChange={(tabId) => { this.changeTab(tabId) }}
          vertical={vert}>
          <TabList vertical>
            <Tab tabFor="papers">Papers</Tab>
            {/* <Tab tabFor="villages">Villages</Tab> */}
            {/* <Tab tabFor="training">Training</Tab> */}
            {/* <Tab tabFor="competitions">Competitions</Tab>
            <Tab tabFor="stickers">Stickers</Tab> */}
          </TabList>
          <span>
            <TabPanel tabId="papers">
              <div className='tab-title'>Call for Papers</div>
              <CFP />
            </TabPanel>
            <TabPanel tabId="villages">
              <div className='tab-title'>Call for Villages</div>
              <Villages />
            </TabPanel>
            {/* <TabPanel tabId="competitions">
              <div className='tab-title'>Call for Competitions</div>
              <p className='tab-paragraph'>Interested in hosting a competition? We are extremely interested in hosting competitions from the community. Some examples of competitions that were hosted last year:</p>
              <div className='tab-bullets'>
                <ul>
                  <li>CTF (hosted by Kernelcon)</li>
                  <li>WiFi Fox & Hound</li>
                  <li>Chillout Village Kernel Smash - Super Smash Bros competition</li>
                  <li>Kernel Panic Technology Olympics</li>
                  <li>Kernel Panic Whose Slide Is It Anyways?</li>
                </ul>
              </div>  
              <p className='tab-paragraph'>Please consider submitting an idea to <a href='mailto:competitions@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>competitions@kernelcon.org</a> if you would like to host a competition for this year's Kernelcon. If your idea is not fully finessed, no worries! We can help your ideas become a reality.</p>
              <p className='tab-paragraph'>Thanks and Good Luck!</p>
            </TabPanel> */}
            {/* <TabPanel tabId="stickers">
              <div className='tab-title'>Call for Stickers</div>
              <p className='tab-heading'>Can't get enough stickers in your life? Us either.</p>
              <p className='tab-paragraph'>Last year Kernelcon had 12 unique stickers that our most creative individuals (and sometimes their family members) spent hours designing. Attendees received a handful of the same unique stickers so they could trade with others and collect the whole set.  It was one of our most talked about swag items, and a fun way to meet new people and get your sticker on.</p>
              <p className='tab-heading'>This year, we would like our community to be a part of the sticker process!</p>
              <p className='tab-paragraph'>So, even if you don't have a creative bone in your body, we would love to see your design! If your design is just an idea, we will try to help fledgling artists achieve their <span className='text-highlight'>vision</span>. Do you have an innovative artist in your family? We accept designs from attendee's family members too! It would be wonderful to include as many people as we can!</p>
              <p className='tab-paragraph'>Are you still interested?  If so, please send your sticker design to <a href='mailto:stickers@kernelcon.org' className='text-highlight' rel='noopener noreferrer'>stickers@kernelcon.org</a>.  We will pick twelve awesome designs for this year's stickers and you will each get a shoutout and a paragraph in the conference book to describe your design.</p>
              <p className='fine-notes'>Note: Please keep your design to a high resolution (> 300dpi) file.  Formats *.(png | pdf | ai | eps | psd) are all acceptable.</p>
              <p className='tab-paragraph'>Looking for inspiration? Look no further! Here are the twelve designs from last year.</p>
              <img src={Stickers}
                width="100%"
                className='stickers'
                alt='stickers' />
            </TabPanel> */}
          </span>
        </Tabs>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
				<div className='venue-section'>
          <div className='open-calls'>
            <h3>Open Calls</h3>
            <MediaQuery minDeviceWidth={761}>
              {this.getTabs(true)}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={760}>
              {this.getTabs(false)}
            </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}
