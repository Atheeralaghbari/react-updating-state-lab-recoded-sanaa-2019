// Code DigitalClicker Component Here
import React from 'react';
 
class DigitalClicker  extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
        timesClicked: 0
    };
  }
 
  handleClick=()=>{
      this.setState(previous=>{
         return{ timesClicked:previous.timesClicked+1}
      },()=>console.log(this.state.timesClicked))
  }
  render() {
    return (
      <div>
           
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
 
export default DigitalClicker;