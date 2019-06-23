import React from 'react';
import { connect } from 'react-redux';
import LeaderboardUser from './LeaderboardUser';
import './Leaderboard.css';

class Leaderboard extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className='Leaderboard'>
        <div className='leaderboard-label'>
          leaderboard
        </div>
        {Object.keys(users).forEach( (u) => {
          const numQuestions = users[u].questions.length;
          const numAnswers = users[u].answers;

          return (<React.Fragment>
            <LeaderboardUser hiScore={true} />
            <LeaderboardUser hiScore={false} />
          </React.Fragment>
          )
        })
        }
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard);