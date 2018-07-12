
import React, { Component } from 'react';
import { toHex } from './convertHex.js';


class DigitProtocolTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Enter Score...'
      }
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
      //Change text string to ascii character and convert to hex.
      this.setState({text: e.target.value.charCodeAt(0).toString(16)}); 
    }
    render() {
      return(
        <div>
        <input type="text" onChange = {this.updateState}/>
          <h4>{this.state.text}</h4>
        </div>
      );
    }
  }
  
  export default DigitProtocolTest;