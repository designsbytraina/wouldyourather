import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
  }

  handleLogoutUser() {
    const { dispatch, authedUser } = this.props;
    dispatch(unsetAuthedUser(authedUser));
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div className='Nav'>
        <NavLink to='/' exact>
          <div className='site-title'>
            WYR?
          </div>
        </NavLink>
        <div className='site-links'>
          <ul>
            <NavLink to='/' exact activeClassName='active'>
              <li key='home'>
              home
              </li>
            </NavLink>
            <NavLink to='/add' exact activeClassName='active'>
              <li key='newPoll'>
              new poll +
              </li>
            </NavLink>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              <li key='leaderboard'>
                leaderboard
              </li>
            </NavLink>
            <NavLink to='/' activeClassName='logout-nav-link'>
              <li key='logout' className='logout-link'><button onClick={this.handleLogoutUser}>logout {authedUser}</button></li>
            </NavLink>
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