import React from 'react';
import PollUnanswered from './PollUnanswered';
import PollAnswered from './PollAnswered';
import './PollDetail.css';

class PollDetail extends React.Component {
  render() {
    return (
      <div className='PollDetail'>
        <PollAnswered />
      </div>
    )
  }
}

export default PollDetail;