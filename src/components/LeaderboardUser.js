import React from 'react';
import { connect } from 'react-redux';
import './LeaderboardUser.css';

class LeaderboardUser extends React.Component {
  render() {
    const LeaderBoardStyling = this.props.hiScore === true ? 'HiScore' : ''
    const HiScoreText = this.props.hiScore === true ? 'HiScoreText' : ''
    const HiScoreTotal = this.props.hiScore === true ? 'HiScoreTotal' : ''
    const { users, user } = this.props;
    const numQuestions = users[user].questions.length;
    const numAnswers = Object.keys(users[user].answers).length;
    const avatarURL = users[user].avatarURL;

    return (
      <div id={LeaderBoardStyling} className='LeaderboardUser'>
        <div className='user-card-img'>
          <img alt={`${user} avatar`} className='user-avatar' src={avatarURL}/>
        </div>
        <div id={HiScoreText} className='user-card-body'>
          <span className='user-name'>{user}</span>
          <div className='user-stats'>
            <table className='user-poll-totals'>
              <tbody>
                <tr className='stats-row'>
                  <td className='row-title'>created polls</td>
                  <td>{numQuestions}</td>
                </tr>
                <tr className='stats-row'>
                  <td className='row-title'>answered polls</td>
                  <td>{numAnswers}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id={HiScoreTotal} className='user-total-score'>
            <span className='score-text'>SCORE</span>
            <span className='score-number'>{numQuestions+numAnswers}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }, { id }) {
  return {
    users,
    id,
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderboardUser);