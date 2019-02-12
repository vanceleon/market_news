import React, { Component } from 'react';
import WSJ from './Components/WSJ';
import CNBC from './Components/CNBC';
import TechCrunch from './Components/TechCrunch';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fed Yield Curves</h1>
        <br></br>
        <h1>WSJ</h1>
        <WSJ/>
        <h1>CNBC News</h1>
        <CNBC/>
        <h1>Tech Cruch</h1>
        <TechCrunch/>
        <h1>World News</h1>
        <h1>Briefing.com</h1>
        <h1>Trading Econonics</h1>
        <h1>Currency Overview</h1>
        <h1>Major Indexes</h1>
        <h1>Municipal Bonds</h1>
        <h1>Corporate Bonds</h1>
        <h1>Commondities Overview</h1>
      </div>
    );
  }
}

export default App;
