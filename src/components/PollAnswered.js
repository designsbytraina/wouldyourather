import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PollAnswered.css';

class PollAnswered extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toDashboard: false
    }
  }

  handleClick() {
    this.setState({toDashboard:true});
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }
    const { question, author, userChoice } = this.props;

    const optionOnePercentage = Math.round( ((question.optionOne.votes.length) / (question.optionOne.votes.length + question.optionTwo.votes.length))*100 );
    const optionTwoPercentage = Math.round( ((question.optionTwo.votes.length) / (question.optionOne.votes.length + question.optionTwo.votes.length))*100 );

    return (
        <div className='PollAnswered'>
          <img alt='placeholder' className='detail-avatar' src={author.avatarURL}/>
          <span className='poll-author-name'>{question.author} asked:</span>
          <button onClick={this.handleClick} className='back-btn btn'>answer more</button>
          <span className='pd-wyr-body-intro'>Would you rather ...</span>
          <div className='poll-detail-results'>
            <div className='optiona-answered'>
              <span className='optiona-answered-text'>{question.optionOne.text}?</span>
              <span className='optiona-answered-count'>{optionOnePercentage}%</span>
              {userChoice === 'optionOne'
                ? <span className='authuser-choice'>YOUR ANSWER</span>
                : null
              }
            </div>
            <span className='or-text'><strong>OR</strong></span>
            <div className='optionb-answered'>
              <span className='optionb-answered-text'>{question.optionTwo.text}?</span>
              <span className='optionb-answered-count'>{optionTwoPercentage}%</span>
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

function mapStateToProps ({questions, users, authedUser}, props) {
  const id = props.id;
  const optionOneVotes = questions[id].optionOne.votes.includes(authedUser);
  const userChoice = optionOneVotes === true ? 'optionOne' : 'optionTwo'

  return {
    question: questions[id],
    author: users[questions[id].author],
    authedUser,
    userChoice
  }
}

export default connect(mapStateToProps)(PollAnswered);