import React from 'react';
import LeaderboardUser from './LeaderboardUser';

class Leaderboard extends React.Component {
  state = {
    count: [ 1,2,3,4,5 ]
  }

  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        {this.state.count.map( (c) => <LeaderboardUser /> )}
      </div>
    )
  }
}

export default Leaderboard;