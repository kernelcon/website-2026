import React, { Component } from 'react';
import './Talks.scss';

// import config from 'agendaConfig';
import config from 'speakerConfig';

export default class Talks extends Component {
  static displayName = 'Talks';

  constructor(props) {
    super(props);
    this.state = {};
  }


  getTalks() {
    const talks = config.map(a => a.talks).flat();
    const talks_ordered = talks.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    const talksComp = talks_ordered.map((ele, idx) => {
      const speakers = ele.authors.map((el, dx) => {
        return (
          <span className='author' key={dx}>{el.name}</span>
        )
      });
      return (
        <div className='talk-section' key={idx}>
          <h3 className='talk-title'>{ele.title}</h3>
          <div className='author-section'>{speakers}</div>
          <div className='abstract'>{ele.abstract}</div>
        </div>
      )
    });

    return talksComp;
  }

  render() {
    const talks = this.getTalks();
    return (
      <div className='venue-section talks-section'>
        <div className='talks'>
          {talks}
        </div>
      </div>
    );
  }
}