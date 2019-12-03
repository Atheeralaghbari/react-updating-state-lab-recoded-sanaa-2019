import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <DigitalClicker timesClicked={this.handleClick} />
    <YouTubeDebugger/>
  </div>,
  document.getElementById('global')
);
