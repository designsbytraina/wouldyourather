import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className='Login'>
        <div className='left-page'>
          <h4 className='title-lg'>Would You Rather?</h4>
          <h6 className='title-sm'>a game of choices</h6>
        </div>
        <div className='right-page'>
          <h4 className='login-text'>Login</h4>
          <div className='login-input'>
            <select required>
              <option default value='' >username</option>
              <option value=''>value</option>
              <option value=''>value</option>
              <option value=''>value</option>
            </select>
          </div>
          <div className='login-input'>
            <input value='' placeholder='password' disabled></input>
          </div>
          <button className='login-btn btn'>login</button>
        </div>
      </div>
    )
  }
}

export default Login;