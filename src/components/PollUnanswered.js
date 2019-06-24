import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleQuestionAnswer } from '../actions/questions';
import './PollUnanswered.css';

class PollUnanswered extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      userChoice: '',
      toDashboard: false
    }
  }

  handleVote(e) {
    e.preventDefault();

    const answer = this.state.userChoice;

    if (answer === '') {
      alert('Please enter an answer :)');
      return
    }

    const { dispatch, id, authedUser } = this.props;

    dispatch(handleQuestionAnswer({
      authedUser,
      id,
      answer
    }))

    this.setState({toDashboard: true});
  }

  handleToggle(e) {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue === 'optionTwo') {
      e.target.previousSibling.previousSibling.removeAttribute('id', 'selected');
    } else if (inputValue === 'optionOne') {
      e.target.nextSibling.nextSibling.removeAttribute('id', 'selected');
    }

    if (e.target.hasAttribute('id', 'selected') === true) {
      e.target.removeAttribute('id', 'selected');
    } else {
      e.target.setAttribute('id', 'selected');
    }

    this.setState({
      userChoice: inputValue
    });
  }

  render() {
    const { question, author } = this.props;

    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }

    return (
        <div className='PollUnanswered'>
          <div>
            <img alt='placeholder' className='detail-avatar' src={author.avatarURL}/>
            <span className='poll-author-name'>{question.author} asks:</span>
            <span className='pd-wyr-body-intro'>Would you rather ...</span>
            <div className='poll-detail-options'>
            <div>
              <option className='optiona-unanswered' onClick={this.handleToggle} value='optionOne' name='optionOne'>{question.optionOne.text}</option>
              <strong>OR</strong>
              <option className='optionb-unanswered' onClick={this.handleToggle} value='optionTwo' name='optionTwo'>{question.optionTwo.text}</option>
            </div>
            <button className='poll-detail-btn btn' onClick={this.handleVote}>vote</button>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps( {questions, users, authedUser}, {id} ) {
  return {
    question: questions[id],
    authedUser,
    id,
    author: users[questions[id].author]
  }
}

export default connect(mapStateToProps)(PollUnanswered);