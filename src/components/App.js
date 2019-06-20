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

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }

  render () {
    const authedUser = this.props.authedUser;
    const loading = this.props.loading;

    return (
      <Router>
        <React.Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {authedUser === ''
              ? <Login />
              : null
            }
            {loading === true
              ? null
              : <div>
                  <Route exact path='/' exact component={Dashboard} />
                  <Route exact path='/questions/:id' exact component={PollDetail} />
                  <Route exact path='/add' exact component={NewPoll} />
                  <Route exact path='/leaderboard' exact component={Leaderboard} />
                  <Route exact path='/oops' exact component={_404} />
                </div>}

          </div>
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser='' }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);