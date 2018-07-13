
import React, { Component } from 'react';
import { toHex } from './convertHex.js';
import { calculateChk } from './calculateChecksum..js';


class DigitProtocolTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myStringIsNowHex: '00',
        buildDisplayCommand: '00'
      }
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
      //Change text string to ascii character and convert to hex.
      this.setState({myStringIsNowHex: e.target.value.charCodeAt(0).toString(16)});
      this.setState({buildDisplayCommand: e.target.value.charCodeAt(0).toString(16)}); 
    }
    render() {
      return(
        <div>
        <input type="text" onChange = {this.updateState}/>
          <h4>User input to hex: 0x{this.state.buildDisplayCommand === 'NaN' ? '00' : this.state.buildDisplayCommand}</h4>
          <p>
          <h4>01 44 30 31 {this.state.buildDisplayCommand === 'NaN' ? '00' : this.state.buildDisplayCommand} Chk Chk 03</h4>
          </p>
        </div>
      );
    }
  }
  
  export default DigitProtocolTest;