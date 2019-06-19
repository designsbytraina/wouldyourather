import React from 'react';
import LeaderboardUser from './LeaderboardUser';
import './Leaderboard.css';

class Leaderboard extends React.Component {
  state = {
    count: [ 1,2,3,4,5 ]
  }

  render() {
    return (
      <div className='Leaderboard'>
        <div className='leaderboard-label'>
          leaderboard
        </div>
        {this.state.count.map( (c) => <LeaderboardUser hiScore={false} /> )}
      </div>
    )
  }
}

export default Leaderboard;