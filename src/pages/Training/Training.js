import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Training.scss';

import config from 'trainingConfig';

class Training extends Component {
  static displayName = 'Training';

  render() {
    // constants, can change from year to year.  Along with config update, should generate new training content.
    const baseUrl = 'training';
    const dayOneTraining = 'Tuesday, April 1st';
    const dayTwoTraining = 'Wednesday, April 2nd';
    const trainingYear = '2025';

    // course descriptions may require their own html (i.e. when instructors put bullets or multiple paragraphs)
    function createMarkup(ele) {
      return {__html: ele};
    }

    const filteredTraining = config.filter(ele => !ele.hide);
    const sortedAndFilteredTraining = filteredTraining.sort((a, b) => {
      return a.course.title.localeCompare(b.course.title);
    });

    const training = sortedAndFilteredTraining.map((ele, idx) => {
      const instructors = ele.instructors.map((el, idx) => {
        return (
          <div className='training-instructor text-highlight' key={idx}>
            <Link to={{ 
              pathname: '/bio/',
              state: {
                name: el.name,
                bio: el.bio,
                twitter: el.twitter_handle,
                linkedin: el.linkedin_handle,
                image: el.image_name
              }
            }}>
              {el.name}
            </Link>
          </div>
        );
      });

      return (
        <>
          <div className='training-card'
            key={`${ele}-${idx}`}
            name={ele.id}
            id={ele.id}>
            <a href={`/${baseUrl}#${ele.id}`}>
              <div className='training-title'>
                <span>{ele.course.title}</span>
                <span>{ele.course.days > 1 ? '$1,000' : '$500'}</span>
              </div>
            </a>
            <div className='training-notes'>
              <div className='training-notes-left'>
                <div className='training-instructors'>
                  <div className='training-heading'>{ele.instructors.length > 1 ? 'Instructors' : 'Instructor'}:</div>
                  <div className='training-instructor-names'>{instructors}</div>
                </div>
                <div className='training-format'>
                  <div className='training-heading'>Format:</div>
                  <div>{ele.course.days} {ele.course.days > 1 ? 'days training' : 'day training'}</div>
                </div>
                <div className='training-format'>
                  <div className='training-heading'>{ele.course.days > 1 ? 'Dates:' : 'Date:'}</div>
                  <div>{ele.course.days > 1 ? `${dayOneTraining} and ${dayTwoTraining}, ${trainingYear}` : ele.day > 1 ? `${dayTwoTraining}, ${trainingYear}`: `${dayOneTraining}, ${trainingYear}`}</div>
                </div>
                <div className='training-format'>
                  <div className='training-heading'>{ele.course.days > 1 ? 'Times:' : 'Time:'}</div>
                  <div>{ele.course.days > 1 ? `${ele.course.time} each day` : ele.course.time}</div>
                </div>
              </div>
              <div className='training-notes-right'>
                <a
                  className="cybr-btn btn-bottom"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.eventzilla.net/e/kernelcon-2025-2138626943">
                  Register Now
                  <span aria-hidden className="cybr-btn__glitch">
                    Register Now
                  </span>
                </a>
              </div>
            </div>

            <div className='training-equipment'>
              <div className='training-heading'>Description:</div>
              <div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.description.short_form)} />
            </div>

            {ele.course.prerequisites && <div className='training-prereqs'>
              <div className='training-heading'>Prerequisites:</div>
              <div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.prerequisites)} />
            </div>}
            {ele.course.equipment && <div className='training-equipment'>
              <div className='training-heading'>Required Equipment:</div>
              <div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.equipment)} />
            </div>}
            {ele.course.whoshouldattend && <div className='training-equipment'>
              <div className='training-heading'>Who Should Attend:</div>
              <div className='training-text' dangerouslySetInnerHTML={createMarkup(ele.course.whoshouldattend)} />
            </div>}
          </div>
        </>
      );
    });

    return (
      <div className="container">
        <div className='training'>
          <div className='venue-section'>
            <h3>Training</h3>
            {/* <p>Once again Kernelcon will be offering several amazing options for training taking place in the days before the con.  Check back soon for more details or if you're interested in leading a training class, checkout our <a rel="noopener noreferrer" className="text-highlight" href="/open-calls">Open Calls page</a> for more details.</p> */}
            <div>
            <br /><p>Kernelcon Training offers courses from experienced trainers on relevant topics in information security. These are hands-on, in-person courses that will help expand attendees' skill sets and knowledge. Kernelcon's goal is to provide top-notch training at an affordable price. Each training ticket includes a badge to the Kernelcon conference and snacks and lunch during training. Whether new to the field or an old blackhat, offense or defense, technical or general, or anything and everything inbetween, we hope you find something you like.</p>
          </div>
          {training}
          </div>
        </div>
      </div>
    );
  }
}

export default Training;

