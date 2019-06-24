import React from 'react';
import { connect } from 'react-redux';
import LeaderboardUser from './LeaderboardUser';
import Login from './Login';
import './Leaderboard.css';

class Leaderboard extends React.Component {
  state = {
    hiScore: false
  }

  calculateHiScore(users) {
    let userScores = [];
    Object.keys(users).forEach( (u) => {
      const total = Object.keys(users[u].answers).length + users[u].questions.length;
      userScores.push([u, total]);
    });
    userScores = userScores.sort( (a, b) => b[1] - a[1]  )
    let hiScoreUser = userScores[0][0]
    return {userScores, hiScoreUser};
  }

  render() {
    const { users, authedUser } = this.props;
    const { userScores, hiScoreUser } = this.calculateHiScore(users);

    if (authedUser === '' || authedUser === null) {
      return <Login />
    }

    return (
      <div className='Leaderboard'>
        <div className='leaderboard-label'>
          leaderboard
        </div>
        {userScores.map( (user) => {
          return user[0] === hiScoreUser
          ? <LeaderboardUser key={user[0]} user={user[0]} hiScore={true} />
          : <LeaderboardUser key={user[0]} user={user[0]} hiScore={false} />
          }
        )}
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard);