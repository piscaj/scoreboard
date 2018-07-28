
import React, { Component } from 'react';
import { displayCommand } from './controlDigit.js';

class TestDisplay extends Component {
    constructor(props) {
      super(props);
      this.state = {
        myStringIsNowHex: '00',
        outputStering: ''
      };
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {

     this.setState({outputString: displayCommand(e.target.value.charCodeAt(0),10)})
      
    }
    render() {
      return(
        <div>
       <input type="text" onChange = {this.updateState}/>
          <h4>{this.state.outputString}</h4>
        </div>
      );
    }
  }

  export default TestDisplay;