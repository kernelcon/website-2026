import React, { Component } from 'react';
import Modal from '../../../components/Modal/Modal';
import Donut from '../../../components/Charts/Donut';
import './TalksSchedule.scss';

import config from 'agendaConfig';

export default class TalksSchedule extends Component {
  static displayName = 'TalksSchedule';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dayIndex: 0,
      showTabNum: 0,
      modal: {
        title: '',
        description: '',
        techLevel: '',
        authors: [],
        time: ''
      }
    };
  }

  toggleScheduleDate = (index) => {
    this.setState({
      dayIndex: index,
      showTabNum: index
    });
  };

  popModal = (title, description, techLevel, authors, time) => () => {
    this.setState({
      modal:{
        title: title,
        description: description,
        techLevel: techLevel,
        authors: authors,
        time: time
      }
    }, () => {
      this.toggleModal();
    });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const currentDay = config[this.state.dayIndex];
    const dayOfWeek = currentDay.dayOfWeek;

    const formatTime = (timeStr) => {
      if (!timeStr || timeStr.length < 4) return timeStr;
      const h = parseInt(timeStr.slice(0, 2), 10);
      const m = timeStr.slice(2);
      const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampm = h >= 12 ? 'PM' : 'AM';
      return `${hour}:${m} ${ampm}`;
    };

    const scheduleTabs = config.map((ele, index) => {
      return (
        <li key={index}>
          <input type='radio'
            onChange={() => {this.toggleScheduleDate(index)}}
            name='schedule-tabs'
            id={`tab${index}`}
            checked={index === this.state.showTabNum ? true : false} />
            <label htmlFor={`tab${index}`}>{ele.dayOfWeek}<span>{ele.date}</span></label>
        </li>
      );
    });

    const tabsHeader = (
      <>
        <ul className='tabs'>
          {scheduleTabs}
        </ul>
        <div className='schedule-heading'>{`Tentative ${dayOfWeek} Speaking Schedule`}</div>
        <div className='tz-note'>Note: All times listed are in Central Time.</div>
      </>
    );


    const trackHeaders = currentDay.roomsInfo.map((ele, index) => {
      return (
        <div key={index} className='track' style={{gridColumn: index+1, gridRow: 1}}>{ele.roomName}</div>
      );
    });

    let rows = 2;
    const totalCols = currentDay.roomsInfo.length;
    const talksGrid = currentDay.talks.map((ele, index) => {
      const gridColumnStart = ele.roomIndex[0] + 1;
      const gridColumnEnd = ele.roomIndex[ele.roomIndex.length - 1] + 2;
      const gridColumn = `${gridColumnStart} / ${gridColumnEnd}`;

      const rowSpan = ele.minutes >= 42
        ? (ele.minutes > 90 ? 2 * Math.floor(ele.minutes / 30) : 2)
        : 1;
      const gridRow = rowSpan > 1 ? `${rows} / ${rows + rowSpan}` : `${rows}`;

      const isLastSlotForThisTime = index + 1 >= currentDay.talks.length || currentDay.talks[index + 1].time !== ele.time;
      const rowComplete = gridColumnEnd - 1 >= totalCols || isLastSlotForThisTime;
      if (rowComplete) {
        rows += ele.minutes >= 42 ? 2 : 1;
      }
      
      const authorsString = ele.authors
        .filter((a) => a.name)
        .map((a) => a.name)
        .join(' - ');
      const hasAuthors = authorsString.length > 0;

      if (ele.emptySlot) {
        return (
          <div
            className="schedule-slot-empty"
            style={{gridColumn: gridColumn, gridRow: gridRow}}
            key={index}
            aria-hidden="true"
          />
        );
      }

      if (ele.setupSlot) {
        return (
          <div
            className="schedule-slot-setup"
            style={{ gridArea: '15 / 3 / 23 / 4' }}
            key={index}
            aria-hidden="false"
            title="Room setup — not a session">
            <div className="box">
              <span className="talk-time">{formatTime(ele.time)}</span>
              <div className="talk-title-and-description">
                <span className="talk-title">{ele.talkTitle}</span>
              </div>
            </div>
          </div>
        );
      }

      const showDescription = ['Registration Opens', 'Lunch (on your own)', "Open Bar / Appetizers & Hors d'oeuvres", 'Kernel Panic'].includes(ele.talkTitle) && ele.talkDescription;
      const fullTitleAndAuthors = hasAuthors ? `${ele.talkTitle} · ${authorsString}` : ele.talkTitle;

      return (
        <button
          type="button"
          className="schedule-talk-trigger"
          style={{gridColumn: gridColumn, gridRow: gridRow}}
          key={index}
          title={fullTitleAndAuthors}
          onClick={this.popModal(ele.talkTitle, ele.talkDescription, ele.talkTechLevel, ele.authors, ele.time)}>
          <div className='box'>
            <span className='talk-time'>{formatTime(ele.time)}</span>
            <div className="talk-title-and-description">
              <div
                className={`${ele.minutes >= 42 ? "truncate-overflow-4 truncate-overflow" : "truncate-overflow-1 truncate-overflow"}`}>
                <span className="talk-title">{ele.talkTitle}</span>
                {hasAuthors && <><span className="talk-separator"> · </span><span className="talk-authors">{authorsString}</span></>}
              </div>
              {showDescription && <span className="talk-description">{ele.talkDescription}</span>}
            </div>
          </div>
        </button>
      );
    });

    let gridTemplateRows = `42px `.repeat(rows - 1);

    const gridTemplateColumnsPercentage = (100 / totalCols).toFixed(1);
    const gridTemplateColumnsString = `calc(${gridTemplateColumnsPercentage}% - 10px) `;
    const gridTemplateColumns = `${gridTemplateColumnsString.repeat(totalCols)}`;
    
    const authors = this.state.modal.authors.map((ele, index) => {
      const author = index ? ` & ${ele.name}` : ele.name;
      return (
        author
      );
    });

    const percentTech = this.state.modal.techLevel ? (this.state.modal.techLevel / 5) * 100 : '';

    return (
      <div className='schedule-talks'>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          title={this.state.modal.title}
        >

          <div className='modal-content'>
            {/* {this.state.modal.} */}
            {this.state.modal.authors.length > 0 && this.state.modal.authors[0].name && <div className='modal-speakers'>
              {`${this.state.modal.authors.length > 1 ? 'Speakers' : 'Speaker'}: `}<span className='modal-authors'>{authors}</span>
            </div>}
            <div className='modal-headline'>
              <div className='modal-headline-time'>Start: <span className='modal-time'>{formatTime(this.state.modal.time)}</span></div>
              {percentTech && <div className='modal-headine-percentage'>
                <Donut value={percentTech} />
		            <span className='tech-label'>% technical</span>
              </div>}
            </div>
            <div className='modal-description'>
              <div className='modal-description-heading'>Description:</div>
              {this.state.modal.description}
            </div>
          </div>         
        </Modal>


        {tabsHeader}
        <div className={`grid-wrapper`}
          style={{gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows}}>
          {trackHeaders}
          {talksGrid}

        </div>
      </div>
    )
  }
}