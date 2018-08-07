import React, { Component } from 'react';
import './App.css';
import TestDisplay from './api/scoreboard/testDisplayCommand'

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