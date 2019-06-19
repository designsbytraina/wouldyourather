import React from 'react';
import './404.css';

class _404 extends React.Component {
  render() {
    return(
      <div className='_404'>
        <div className='message-container'>
          <div className='_404-text'>404</div>
          <div className='_404-message'>
            sorry, the page you're trying to access doesn't exist
          </div>
          <button id='_404-btn' className='btn'>view polls</button>
        </div>
      </div>
    )
  }
}

export default _404;