import React from 'react';
import DashboardPoll from './DashboardPoll';
import './Dashboard.css'

class Dashboard extends React.Component {
  state = {
    count: [ 1,2,3,4,5 ]
  };

  render() {
    return (
      <div className='Dashboard'>
        <button className='unanswered dashboard-btn'>unanswered</button>
        <button className='answered dashboard-btn'>answered</button>
        <div className='dashboard-poll-list'>
        {this.state.count.map( (c) => {
          return <DashboardPoll />
        } )}
        </div>
      </div>
    )
  }

}

export default Dashboard;