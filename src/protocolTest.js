
import React, { Component } from 'react';
import { calculateChk } from './calculateChecksum..js';
import { SOH, DIGIT, ID0, ID1, ETX } from "./constants.js";

var TEMP = 0x00;
class DigitProtocolTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myStringIsNowHex: '00',
        buildDisplayCommand: '00',
        checksum: ''
      }
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
      //Change text string to ascii character and convert to hex.
      this.setState({myStringIsNowHex: e.target.value.charCodeAt(0).toString(16)});
      this.setState({buildDisplayCommand: e.target.value.charCodeAt(0).toString(16)});
      TEMP = parseInt(e.target.value.charCodeAt(0),10);
      this.setState({checksum: calculateChk(DIGIT+ID0+ID1+TEMP)}); 
    }
    render() {
      return(
        <div>
        <input type="text" onChange = {this.updateState}/>
          <h4>User input to hex: 0x{this.state.buildDisplayCommand === 'NaN' ? '00' : this.state.buildDisplayCommand}</h4>
          
          <h4>{this.state.buildDisplayCommand === 'NaN' ? '00' : '0'+SOH+' '+DIGIT.toString(16)+' '+ID0.toString(16)+' '+ID1.toString(16)+' '+this.state.buildDisplayCommand+' '+this.state.checksum.toString(16)+' 0'+ETX}</h4>
          
        </div>
      );
    }
  }
  
  export default DigitProtocolTest;