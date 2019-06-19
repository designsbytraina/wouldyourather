import React from 'react';
import './NewPoll.css';

class NewPoll extends React.Component {
  render() {
    return (
      <div className='NewPoll'>
        <div className='new-poll-label'>
          new poll +
        </div>
        <div className='new-poll-body'>
          <span className='wyr-body-intro'>Would you rather ...</span>
          <div className='new-poll-form'>
            <input className='form-input' type='text' required placeholder='enter first option' />
            <strong>OR</strong>
            <input className='form-input' type='text' required placeholder='enter second option' />
          </div>
          <button className='new-poll-btn btn'>create poll</button>
        </div>
      </div>
    )
  }
}

export default NewPoll;