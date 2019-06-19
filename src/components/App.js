import React from 'react';
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import PollDetail from './PollDetail';
import _404 from './404.js';
// import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <_404 />
    </div>
  );
}

export default App;
