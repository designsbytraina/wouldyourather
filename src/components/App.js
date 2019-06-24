import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    if (authedUser === '' || authedUser === null) {
      return (
        <Router>
          <React.Fragment>
            <LoadingBar />
            <div className='App'>
            {loading === true
              ? null
              : <div>
                  <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/questions/:id' exact component={Login} />
                    <Route path='/add' exact component={Login} />
                    <Route path='/leaderboard' exact component={Login} />
                    <Route exact component={_404} />
                  </Switch>
                </div>
            }
            </div>
          </React.Fragment>
        </Router>
      )
    } else {
      return (
        <Router>
          <React.Fragment>
          <LoadingBar />
            <div className='App'>
              <Nav />
              {loading === true
                ? null
                : <div>
                    <Switch>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/questions/:id' exact component={PollDetail} />
                      <Route path='/add' exact component={NewPoll} />
                      <Route path='/leaderboard' exact component={Leaderboard} />
                      <Route exact component={_404} />
                    </Switch>
                  </div>
                }
            </div>
          </React.Fragment>
        </Router>
      )
    }
  }
}

function mapStateToProps ({ authedUser='' }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);