import React from 'react';
import {connect} from 'react-redux';
import PollUnanswered from './PollUnanswered';
import PollAnswered from './PollAnswered';
import Login from './Login';
import './PollDetail.css';

class PollDetail extends React.Component {
  render() {
    const { authedUser } = this.props;
    if (authedUser === '' || authedUser === null) {
      return <Login />
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
  const optionOneVotes = questions[id].optionOne.votes;
  const optionTwoVotes = questions[id].optionTwo.votes;
  const isAnswered = optionOneVotes.includes(authedUser) || optionTwoVotes.includes(authedUser);

  return {
    question: questions[id],
    authedUser,
    isAnswered
  }
}

export default connect(mapStateToProps)(PollDetail);