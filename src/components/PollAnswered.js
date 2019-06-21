import React from 'react';
import { connect } from 'react-redux';
import './PollAnswered.css';

class PollAnswered extends React.Component {
  render() {
    const { question, authedUser, userChoice } = this.props;

    return (
        <div className='PollAnswered'>
          <span className='poll-author-name'>{question.author} asked:</span>
          <span className='pd-wyr-body-intro'>Would you rather ...</span>
          <div className='poll-detail-results'>
            <div className='optiona-answered'>
              <span className='optiona-answered-text'>{question.optionOne.text}?</span>
              <span className='optiona-answered-count'>{question.optionOne.votes.length}</span>
              {userChoice === 'optionOne'
                ? <span className='authuser-choice'>YOUR ANSWER</span>
                : null
              }
            </div>
            <span className='or-text'><strong>OR</strong></span>
            <div className='optionb-answered'>
              <span className='optionb-answered-text'>{question.optionTwo.text}?</span>
              <span className='optionb-answered-count'>{question.optionTwo.votes.length}</span>
              {userChoice === 'optionTwo'
                ? <span className='authuser-choice'>YOUR ANSWER</span>
                : null
              }
            </div>
          </div>
          <div className='total-results'>{question.optionOne.votes.length + question.optionTwo.votes.length} total votes</div>
        </div>
    )
  }
}

function mapStateToProps ({questions, authedUser}, props) {
  const id = props.id;
  const optionOneVotes = questions[id].optionOne.votes.includes(authedUser);
  const optionTwoVotes = questions[id].optionTwo.votes.includes(authedUser);
  const userChoice = optionOneVotes === true ? 'optionOne' : 'optionTwo'

  return {
    question: questions[id],
    authedUser,
    userChoice
  }
}

export default connect(mapStateToProps)(PollAnswered);