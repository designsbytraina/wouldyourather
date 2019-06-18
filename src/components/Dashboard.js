import React from 'react';
import DashboardPoll from './DashboardPoll';

class Dashboard extends React.Component {
  state = {
    count: [ 1,2,3,4,5 ]
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <h4>unanswered</h4>
        {this.state.count.map( (c) => {
          return <DashboardPoll />
        } )}
      </div>
    )
  }
}

export default Dashboard;