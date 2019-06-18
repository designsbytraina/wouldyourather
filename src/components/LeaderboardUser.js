import React from 'react';

class LeaderboardUser extends React.Component {
  render() {
    return (
      <div>
        <h4>USERNAME</h4>
        <hr/>
        <p>
          <span>created polls</span><br/>
          <span>answered polls</span><br/>
          <span>score</span><br/>
        </p>
      </div>
    )
  }
}

export default LeaderboardUser;