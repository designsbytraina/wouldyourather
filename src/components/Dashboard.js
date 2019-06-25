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
    let authedUserUnAnswered = this.props.users[authedUser].answers;
    authedUserUnAnswered = Object.keys(authedUserUnAnswered);
    authedUserUnAnswered.forEach( (q) => {
        let answeredQuestion = this.props.questions[q];
        authedUserAnswered.push([answeredQuestion, answeredQuestion.timestamp]);
      }
    )
    authedUserAnswered.sort( (a,b) => a[1] - b[1] ).reverse();

    let authedUserUnanswered = [];
    Object.keys(this.props.questions).forEach((q) => {
      if (!authedUserUnAnswered.includes(q)) {
        let unansweredQuestion = this.props.questions[q];
        authedUserUnanswered.push([unansweredQuestion, unansweredQuestion.timestamp]);
      }});
    authedUserUnanswered.sort( (a,b) => a[1] - b[1] ).reverse();

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
            {authedUserUnanswered.map( (q) => {
              return <DashboardPoll key={q[0].id} id={q[0].id} userAnswered={false}/>
            } )}
            </div>
          : <div className='dashboard-poll-list'>
            {authedUserAnswered.map( (q) => {
              return <DashboardPoll key={q[0].id} id={q[0].id} userAnswered={true}/>
            } )}
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  // let questionsObject = questions;
  // let sortedQuestions = [];
  // Object.keys(questionsObject).forEach( (q) => sortedQuestions.push([questions[q], questions[q].timestamp]) );
  // sortedQuestions.sort( (a,b) => a[1] - b[1] ).reverse();

  return {
    authedUser,
    users,
    questions,
    // sortedQuestions
    // questionIds: Object.keys(questions)
    //   .sort((a,b) => questions[a].timestamp - questions[b].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);