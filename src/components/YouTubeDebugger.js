// Code YouTubeDebugger Component Here
import React from 'react';
 
class YouTubeDebugger  extends React.Component {
  constructor() {
    super();
    this.state={
        
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
    }
}
    updateBitrate=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        },()=>console.log(this.state.settings.bitrate))
    }
    updateResloution=()=>{

        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution:'720p' 
                }
            }
          
        },()=>console.log(this.state.settings.video.resolution))  
    }
    


    render() {
        return (
          <div>
         
           <label> {this.state.settings.bitrate}</label><button className ="bitrate" onClick={this.updateBitrate}>updateBirates!</button>   <br/>

           <label> {this.state.settings.video.resolution} </label><button className ="resolution" onClick={this.updateResloution}>updateResloution!</button>

          </div>
        )
      }
    }
    export default YouTubeDebugger;