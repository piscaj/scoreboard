
import React, { Component } from 'react';

class DigitProtocolTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: 'Enter Score...'
      }
      this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
      this.setState({data: e.target.value});
    }
    render() {
      return(
        <div>
        <input type="text" value = {this.state.data} onChange = {this.updateState}/>
          <h4>{this.state.data}</h4>
        </div>
      );
    }
  }
  
  export default DigitProtocolTest;