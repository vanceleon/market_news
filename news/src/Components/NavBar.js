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
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}
      >
        <h1>Morning Briefing</h1>
        <a className='navLinks' href='#interestRates'>
          Interest Rates
        </a>
        <a className='navLinks' href='#WSJ'>
          WSJ
        </a>
        <a className='navLinks' href='#CNBC'>
          CNBC
        </a>
        <a className='navLinks' href='#TechCrunch'>
          Tech Crunch
        </a>
      </div>
    );
  }
}

export default NavBar;
// const NavBar = () => {

// }
