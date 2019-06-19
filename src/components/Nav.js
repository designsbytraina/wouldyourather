import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className='Nav'>
        <div className='site-title'>
          WYR?
        </div>
        <div className='site-links'>
          <ul>
            <li key='home'>home</li>
            <li key='newPoll'>new poll +</li>
            <li key='leaderboard'>leaderboard</li>
            <li key='logout' className='logout-link'>logout</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;