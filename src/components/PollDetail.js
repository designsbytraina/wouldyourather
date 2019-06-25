import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import PollUnanswered from './PollUnanswered';
import PollAnswered from './PollAnswered';
import Login from './Login';
// import _404 from './404';
import './PollDetail.css';

class PollDetail extends React.Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === '' || authedUser === null) {
      return <Login />
    }
    if (!this.props.questionExists) {
      return <Redirect to='/404'/>
    }

    if (this.props.isAnswered) {
      return (
        <div className='PollDetail'>
          <PollAnswered id={this.props.question.id} />
        </div>)
    } else {
      return (
        <div className='PollDetail'>
          <PollUnanswered id={this.props.question.id} />
        </div>)
    }
  }
}

function mapStateToProps ({questions, authedUser}, props) {
  const { id } = props.match.params;
  let optionOneVotes;
  let optionTwoVotes;
  let isAnswered;
  let questionExists;
  if (Object.keys(questions).includes(id)) {
    optionOneVotes = questions[id].optionOne.votes;
    optionTwoVotes = questions[id].optionTwo.votes;
    isAnswered = optionOneVotes.includes(authedUser) || optionTwoVotes.includes(authedUser);
    questionExists = true;
  } else {
    optionOneVotes = [];
    optionTwoVotes = [];
    isAnswered = false;
    questionExists = false;
  }
  return {
    question: questions[id],
    authedUser,
    isAnswered,
    questionExists
  }
}

export default connect(mapStateToProps)(PollDetail);