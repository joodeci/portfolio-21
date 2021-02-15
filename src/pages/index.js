import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/Logo';
import './index.css';

export default () => {
  return (
    <div class="wrapper">
    <Logo className="logo"/>
      <h1>HELLO! I’m Jodeci Correa.</h1>
      <p>Currently a product designer at Bold Commerce. Occasionally an American R&B quartet.</p>
      <p>If you want to discuss my passion for fashion, need a shoulder to cry on, or even discuss working together, you can contact me via email.</p>
      <span>Follow me on:</span>
      <Link to="https://www.instagram.com/joodeci">Instagram</Link>
      <Link to="https://www.twitter.com/joodeci">Twitter</Link>
      <Link to="https://www.are.na/joodeci">Are.na</Link>
      <Link to="https://www.linkedin.com/in/jodeci-correa-a4a4a2b5/">LinkedIn</Link>
      <Link class="hide" to="/blog">View Case Studies</Link>
    </div>
  )
}
