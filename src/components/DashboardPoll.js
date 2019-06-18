import React from 'react';

class DashboardPoll extends React.Component {
  render() {
    return (
      <div style={{border:'1px solid black', width: '25%', display:'inline-block'}} >
        <img />
        <h6>AUTHOR asks:</h6>
        <p>
          <span>Would you rather ...</span><br/>
          <span><strong>optionA</strong> or <strong>optionB</strong></span>
        </p>
        <button>view poll</button>
      </div>
    )
  }
}

export default DashboardPoll;