import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import './App.css';
import DigitProtocolTester from './protocolTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DigitProtocolTester />
      </div>
    );
  }
}

export default App;
