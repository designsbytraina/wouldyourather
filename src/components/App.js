import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import PollDetail from './PollDetail';
import _404 from './404.js';
// import logo from '../logo.svg';
import './App.css';

class App() extends React.Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {this.props.loading === true
              ? null
              : <Dashboard />
            }
            {/*<Login />*/}
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);