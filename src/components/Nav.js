import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
  }

  handleLogoutUser() {
    // dispatch logout user event
    console.log(this.props.authedUser);
  }

  render() {
    return (
      <div className='Nav'>
        <div className='site-title'>
          WYR?
        </div>
        <div className='site-links'>
          <ul>
            <li key='home'>
              <NavLink to='/' exact activeClassName='active'>
              home
              </NavLink>
            </li>
            <li key='newPoll'>
              <NavLink to='/add' exact activeClassName='active'>
              new poll +
              </NavLink>
            </li>
            <li key='leaderboard'>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                leaderboard
              </NavLink>
            </li>
            <li key='logout' className='logout-link'><button onClick={this.handleLogoutUser}>logout</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser=''}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav);