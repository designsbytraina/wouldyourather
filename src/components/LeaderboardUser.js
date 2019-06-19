import React from 'react';
import './LeaderboardUser.css';

class LeaderboardUser extends React.Component {
  render() {
    const LeaderBoardStyling = this.props.hiScore === true ? 'HiScore' : 'LeaderboardUser'

    return (
      <div className={LeaderBoardStyling}>
        <div className='user-card-img'>
          <img className='user-avatar' src='https://via.placeholder.com/290x290'/>
        </div>
        <div className='user-card-body'>
          <span className='user-name'>username</span>
          <div className='user-stats'>
            <table>
              <tr className='stats-row'>
                <td className='row-title'>created polls</td>
                <td>#</td>
              </tr>
              <tr className='stats-row'>
                <td className='row-title'>answered polls</td>
                <td>#</td>
              </tr>
            </table>
          </div>
          <div className='user-total-score'>
            <span className='score-text'>SCORE</span>
            <span className='score-number'>#</span>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderboardUser;