import React from 'react';
import { Link } from 'gatsby';
import '../pages/index.css';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <div class="grid">
        <h5 className="footer-links footer-links__socialmedia nav">
          <Link to="https://www.instagram.com/joodeci">Instagram ↦</Link>
          <Link to="https://www.twitter.com/joodeci">Twitter ↦</Link>
          <Link to="https://www.are.na/joodeci">Are.na ↦</Link>
          <Link to="https://www.linkedin.com/in/jodeci-correa-a4a4a2b5/">LinkedIn ↦</Link>
          <Link to="mailto:jodecic@gmail.com">Email ↦</Link>
        </h5>
        <div class="footer-wrapup">
          <h4>Made with love using: React.JS, Netlify and Gatsby<br/>
          © Jodeci Correa Scrapbook ‘22</h4>
        </div>
      </div>
    )
  }
}


export default Footer
