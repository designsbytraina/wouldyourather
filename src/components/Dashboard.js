import React from 'react';
import { connect } from 'react-redux';

import DashboardPoll from './DashboardPoll';
import './Dashboard.css'

class Dashboard extends React.Component {
  state = {
    filterDashboard: 'unanswered'
  }

  toggleDashboard(e) {
    const newView = e.target.value;
    this.setState({filterDashboard: newView});
  }

  render() {
    let authedUserAnswered = [];
    const authedUserQuestions = this.props.users[this.props.authedUser].questions;
    authedUserQuestions.forEach( (q) => {
        let answeredQuestion = this.props.questions[q];
        authedUserAnswered.push(answeredQuestion);
      }
    )

    let authedUserUnanswered = [];
    Object.keys(this.props.questions).filter((q) => {
      if (!authedUserQuestions.includes(q)) {
        authedUserUnanswered.push(this.props.questions[q])
      }
    });

    return (
      <div className='Dashboard'>
        <button onClick={this.toggleDashboard} className='unanswered dashboard-btn' value='unanswered'>unanswered</button>
        <button onClick={this.toggleDashboard} className='answered dashboard-btn' value='answered'>answered</button>
        {this.state.filterDashboard === 'unanswered'
          ? <div className='dashboard-poll-list'>
            {authedUserUnanswered.map( (q) => {
              return <DashboardPoll key={q.id} id={q.id} />
            } )}
            </div>
          : <div className='dashboard-poll-list'>
            {authedUserAnswered.map( (q) => {
              return <DashboardPoll key={q.id} id={q.id} />
            } )}
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    authedUser,
    users,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);