import React from 'react';
import Logo from '../../static/images/Logo';
import '../pages/index.css';
import './Navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <header class="grid nav-container" id="navbar">
        <div class="nav-content">
          <Logo className="logo"/>
          <span class="nav nav-links">
            <a href="/">Home</a>
            <a href="/#work">Work</a>
            <a href="/about">About</a>
          </span>
        </div>
      </header>
    )
  }
}


export default Navbar
