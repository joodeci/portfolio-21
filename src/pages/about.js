import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './index.css';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
            <Navbar />

          <section id="about">
            <div className="grid about">
              <div className="about--image__container">
                <img alt="its me." src="../images/uploads/me2.jpg"/>
              </div>
              <div className="about--content">
                <h1 className="about--content__title">I'm Jodeci Correa. Human being, product designer, & <a href="https://youtu.be/oYwL-FzFDKQ">occasional American R&B quartet</a></h1>
                <p>5+ years of experience with a passion for creating thoughtful products that make a difference. My work combines a background in graphic design, along with e-commerce technology and user focused design thinking. I believe in technology and design as a means to connect and shape how humans around the world are seen, heard, and felt. My ethos in life is to always improve and leave things better than the way I found them.<br/><a href="https://read.cv/jodeci"> See details about my ever growing career as a designer.</a></p>
                <p>Outside of work, I'm a traveller, casual photographer, collector of vinyl records and self proclaimed <a href="https://letterboxd.com/jodeci/">movie buff.</a></p>
              </div>
            </div>

          </section>

            <Footer />
        </main>
      </React.Fragment>
      )
    }
}
