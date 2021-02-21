import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/images/Logo';
import BlogRoll from '../components/BlogRoll';
import Navbar from '../components/Navbar';
import './index.css';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
            <Navbar />

          <section id="intro">
            <div className="intro--header">
              <h1>HELLO! I’m Jodeci Correa.</h1>
            </div>
            <div className="intro--content">
              <p>Currently a product designer at Bold Commerce. <br/>Occasionally an American R&B quartet.</p>
              <p>If you want to discuss my passion for fashion, need a shoulder to cry on, or even discuss working together, you can contact me <a href="mailto:jodecic@gmail.com">via email.</a></p>
              <span>Follow me on:</span>
              <Link to="https://www.instagram.com/joodeci">Instagram</Link>
              <Link to="https://www.twitter.com/joodeci">Twitter</Link>
              <Link to="https://www.are.na/joodeci">Are.na</Link>
              <Link to="https://www.linkedin.com/in/jodeci-correa-a4a4a2b5/">LinkedIn</Link>
              <Link to="/blog">View Case Studies</Link>
            </div>
          </section>

          <section id="work">
            <h5>Work</h5>
            <BlogRoll />
          </section>

        </main>
      </React.Fragment>
      )
    }
}
