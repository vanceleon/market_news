import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      event: false
    };
  }

  onClick = () => {
    this.setState({ event: true });
    window.addEventListener('click', this.handleEvent);
  };

  handleEvent = ev => {
    ev.preventDefault();
  };

  render() {
    return (
      <div className='header'>
        <h1>Morning Briefing</h1>
        <div className='navigation-bar'>
          <a className='navLinks' href='#interestRates'>
            Interest Rates
          </a>
          <a className='navLinks' href='#WSJ'>
            WSJ
          </a>
          {/* <a className='navLinks' href='#CNBC'>
            CNBC
          </a> */}
          <a className='navLinks' href='#TechCrunch'>
            Tech Crunch
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
// const NavBar = () => {

// }
