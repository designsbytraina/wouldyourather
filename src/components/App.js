import React from 'react';
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
// import logo from '../logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Nav /><hr/><br/>
      <Login /><hr/>
      <Dashboard /><hr/>
      <NewPoll /><hr/>
      <Leaderboard />
    </div>
  );
}

export default App;
