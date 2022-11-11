import React from 'react';
import { Link } from 'gatsby';
import BlogRoll from '../components/BlogRoll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './index.css';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
            <Navbar />

          <section id="intro">
            <div className="grid">
              <h1 className="intro--header"><Link to="https://youtu.be/rEq1Z0bjdwc">Hello there!</Link> 👋 Jodeci Correa is a human being + product designer.</h1>
                <h1 className="intro--bio">Currently exploring new opportunities</h1>

              <h5 className="intro--socialmedia nav">Contact me here:
                <Link to="https://www.instagram.com/joodeci">Instagram ↦</Link>
                <Link to="https://www.twitter.com/joodeci">Twitter ↦</Link>
                <Link to="https://www.are.na/joodeci">Are.na ↦</Link>
                <Link to="https://www.linkedin.com/in/jodeci-correa-a4a4a2b5/">LinkedIn ↦</Link>
                <Link to="mailto:jodecic@gmail.com">Email ↦</Link>
              </h5>
            </div>
          </section>
          <section id="work">
            <div class="grid"><h5 class="grid--title">WORK</h5></div>
            <BlogRoll />
          </section>
            <Footer />
        </main>
      </React.Fragment>
      )
    }
}
