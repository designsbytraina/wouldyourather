import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './DashboardPoll.css';

class DashboardPoll extends React.Component {
  render() {
    const { question, authorInfo } = this.props;
    const author = question.author;
    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return (
      <div className='DashboardPoll'>
        <div className='poll-card-img'>
          <img alt='placeholder' className='author-avatar' src={authorInfo.avatarURL}/>
        </div>
        <div className='poll-card-body'>
          <span className='author-name'>{author} asks:</span>
          <span className='wyr-body-text'>Would you rather ...</span>
          <span className='wyr-body-options'><strong>{optionOne}</strong></span> or <span className='wyr-body-options'><strong>{optionTwo}</strong></span><br/>
          <Link to={{
            pathname: `/questions/${question.id}`,
            state: {
              userAnswered: this.props.userAnswered,
              questionId: question.id
            }
          }}><button className='dashboard-poll-btn btn'>view poll</button></Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions, users}, {id, userAnswered}) {
  const question = questions[id];
  const authorInfo = users[question.author];

  return {
    authedUser,
    userAnswered,
    authorInfo,
    question: question
      ? question
      : null,
    votes: question
      ? question.votes
      : []
  }
}

export default withRouter(connect(mapStateToProps)(DashboardPoll));