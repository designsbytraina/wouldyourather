import React from 'react';
import './DashboardPoll.css';

class DashboardPoll extends React.Component {
  render() {
    return (
      <div className='DashboardPoll'>
        <div className='poll-card-img'>
          <img className='author-avatar' src='https://via.placeholder.com/290x290'/>
        </div>
        <div className='poll-card-body'>
          <span className='author-name'>AUTHOR asks:</span>
          <span className='wyr-body-text'>Would you rather ...</span>
          <span className='wyr-body-options'><strong>optionA</strong></span> or <span className='wyr-body-options'><strong>optionB</strong></span>
          <button className='dashboard-poll-btn btn'>view poll</button>
        </div>
      </div>
    )
  }
}

export default DashboardPoll;