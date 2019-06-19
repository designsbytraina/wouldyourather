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
            <li>home</li>
            <li>new poll +</li>
            <li>leaderboard</li>
            <li className='logout-link'>logout</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;