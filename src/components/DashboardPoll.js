import React from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/_DATA';
import './DashboardPoll.css';

class DashboardPoll extends React.Component {
  render() {
    const { question } = this.props;
    const author = question.author;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return (
      <div className='DashboardPoll'>
        <div className='poll-card-img'>
          <img alt='placeholder' className='author-avatar' src='https://via.placeholder.com/290x290'/>
        </div>
        <div className='poll-card-body'>
          <span className='author-name'>{author} asks:</span>
          <span className='wyr-body-text'>Would you rather ...</span>
          <span className='wyr-body-options'><strong>{optionOne}</strong></span> or <span className='wyr-body-options'><strong>{optionTwo}</strong></span>
          <button className='dashboard-poll-btn btn'>view poll</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, {id}) {
  const question = questions[id];
  const optionOneText = question.optionOne.text;
  const optionTwoText = question.optionTwo.text;
  const questionAuthor = question.author;

  return {
    authedUser,
    question: question
      ? question
      : null,
    votes: question
      ? question.votes
      : []
  }
}

export default connect(mapStateToProps)(DashboardPoll);