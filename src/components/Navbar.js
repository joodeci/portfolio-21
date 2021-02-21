import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../static/images/Logo';
import '../pages/index.css';
import './Navbar.css';


class Navbar extends React.Component {
  render() {
    return (
      <header id="navbar">
        <span>
          <a href="/"><Logo className="logo"/></a>
        </span>
        <span>
          <a href="/#work">Work</a>
        </span>
        <span>
          <a href="/#contact">Contact</a>
        </span>
      </header>
    )
  }
}


export default Navbar
