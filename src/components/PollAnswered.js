import React from 'react';
import './PollAnswered.css';

class PollAnswered extends React.Component {
  render() {
    return (
        <div className='PollAnswered'>
          <span className='poll-author-name'>AUTHOR asked:</span>
          <span className='pd-wyr-body-intro'>Would you rather ...</span>
          <div className='poll-detail-results'>
            <div className='optiona-answered'>
              <span className='optiona-answered-text'>optionA ?</span>
              <span className='optiona-answered-count'>#</span>
              <span className='authuser-choice'>YOUR ANSWER</span>
            </div>
            <span className='or-text'><strong>OR</strong></span>
            <div className='optionb-answered'>
              <span className='optionb-answered-text'>optionB ?</span>
              <span className='optionb-answered-count'>#</span>
              <span className='authuser-choice' hidden>YOUR ANSWER</span>
            </div>
          </div>
          <span className='total-results'>COUNTOF total votes</span>
        </div>
    )
  }
}

export default PollAnswered;