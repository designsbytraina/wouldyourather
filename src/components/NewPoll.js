import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import './NewPoll.css';

class NewPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOneText: '',
      optionTwoText: '',
      toDashboard: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const newText = e.target.value;
    if (e.target.name === 'optionOneText') {
      this.setState({optionOneText: newText});
    } else if (e.target.name === 'optionTwoText') {
      this.setState({optionTwoText: newText});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleAddQuestion({
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText
    }))
    this.setState({toDashboard:true});

    // console.log('$$$$');
    // console.log(this.state.optionOneText);
    // console.log(this.state.optionTwoText);
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }
    return (
      <div className='NewPoll'>
        <div className='new-poll-label'>
          new poll +
        </div>
        <div className='new-poll-body'>
          <span className='wyr-body-intro'>Would you rather ...</span>
          <div className='new-poll-form'>
            <input name='optionOneText' className='form-input' type='text' required placeholder='enter first option' onChange={this.handleInputChange} />
            <strong>OR</strong>
            <input name='optionTwoText' className='form-input' type='text' required placeholder='enter second option' onChange={this.handleInputChange}/>
          </div>
          <button className='new-poll-btn btn' onClick={this.handleSubmit}>create poll</button>
        </div>
      </div>
    )
  }
}

export default connect()(NewPoll);