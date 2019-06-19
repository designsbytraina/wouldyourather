import React from 'react';
import './PollUnanswered.css';

class PollUnanswered extends React.Component {
  render() {
    return (
        <div className='PollUnanswered'>
          <span className='poll-author-name'>AUTHOR asks:</span>
          <span className='pd-wyr-body-intro'>Would you rather ...</span>
          <div className='poll-detail-options'>
            <span id='selected' className='optiona-unanswered'>optionA</span>
            <strong>OR</strong>
            <span className='optionb-unanswered'>optionB</span>
          </div>
          <button className='poll-detail-btn btn'>vote</button>
        </div>
    )
  }
}

export default PollUnanswered;