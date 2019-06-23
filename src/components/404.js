import React from 'react';
import { Redirect } from 'react-router-dom';
import './404.css';

class _404 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      toDashboard: false
    }
  }

  handleClick() {
    this.setState({toDashboard:true});
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/'/>
    }
    return(
      <div className='_404'>
        <div className='message-container'>
          <div className='_404-text'>404</div>
          <div className='_404-message'>
            sorry, the page you're trying to access doesn't exist
          </div>
          <button id='_404-btn' onClick={this.handleClick} className='btn'>back to wyr?</button>
        </div>
      </div>
    )
  }
}

export default _404;