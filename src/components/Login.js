import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      userId: '',
      toDashboard: false
    }
  }

  handleChange(e) {
    const userId = e.target.value;
    console.log(userId);
    this.setState({userId: userId});
  }

  handleLogin(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.userId));
    this.setState({toDashboard: true});
  }


  render() {
    const { usernames } = this.props;
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='Login'>
        <div className='left-page'>
          <h4 className='title-lg'>Would You Rather?</h4>
          <h6 className='title-sm'>a game of choices</h6>
        </div>
        <div className='right-page'>
          <h4 className='login-text'>Login</h4>
          <div className='login-input'>
            <select onChange={this.handleChange} required>
              <option default value='' >username</option>
              {usernames.map( (u) => <option key={u} value={u}>{u}</option> )}
            </select>
          </div>
          <div className='login-input'>
            <input value='' placeholder='password' disabled></input>
          </div>
          <button className='login-btn btn' onClick={this.handleLogin}>login</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    usernames: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login);