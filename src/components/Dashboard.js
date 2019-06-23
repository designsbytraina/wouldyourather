import React from 'react';
import { connect } from 'react-redux';

import DashboardPoll from './DashboardPoll';
import Login from './Login';
import './Dashboard.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDashboard: 'unanswered'
    }
    this.toggleDashboard = this.toggleDashboard.bind(this);
  }

  toggleDashboard(e) {
    const newView = e.target.value;
    this.setState({filterDashboard: newView});
  }

  render() {
    const { authedUser } = this.props;
    if (authedUser === '' || authedUser === null) {
      return <Login />
    }
    let authedUserAnswered = [];
    const authedUserQuestions = this.props.users[authedUser].questions;
    authedUserQuestions.forEach( (q) => {
        let answeredQuestion = this.props.questions[q];
        authedUserAnswered.push(answeredQuestion);
      }
    )

    let authedUserUnanswered = [];
    Object.keys(this.props.questions).forEach((q) => {
      if (!authedUserQuestions.includes(q)) {
        authedUserUnanswered.push(this.props.questions[q])
      }});

    return (
      <div className='Dashboard'>
      {this.state.filterDashboard === 'unanswered'
        ? <React.Fragment>
            <button onClick={this.toggleDashboard} className='unanswered dashboard-btn' value='unanswered'>unanswered</button>
            <button onClick={this.toggleDashboard} className='answered dashboard-btn' value='answered'>answered</button>
          </React.Fragment>

        : <React.Fragment>
            <button onClick={this.toggleDashboard} className='answered dashboard-btn' value='unanswered'>unanswered</button>
            <button onClick={this.toggleDashboard} className='unanswered dashboard-btn' value='answered'>answered</button>
          </React.Fragment>
      }
        {this.state.filterDashboard === 'unanswered'
          ? <div className='dashboard-poll-list'>
            {authedUserUnanswered.reverse().map( (q) => {
              return <DashboardPoll key={q.id} id={q.id} userAnswered={false}/>
            } )}
            </div>
          : <div className='dashboard-poll-list'>
            {authedUserAnswered.reverse().map( (q) => {
              return <DashboardPoll key={q.id} id={q.id} userAnswered={true}/>
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
      .sort((a,b) => questions[a].timestamp - questions[b].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);