import React, { Component } from 'react';
import './App.css';
import TestDisplay from './api/scoreboard/testDisplayCommand'

const express =  require('express');
const app = express();

App.use((req, res, next) => {
  res.status(200).json({
  message: 'It works!'
  });
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestDisplay />
      </div>
    );
  }
}

export default App;
