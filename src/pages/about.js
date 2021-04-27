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
                <img alt="its me." src="../images/uploads/me.jpg"/>
              </div>
              <div className="about--content">
                <h1>I'm Jodeci Correa. Product designer and occasional American R&B quartet</h1>
                <h5>I believe that technology plays a pivotal role in reshaping the ways in which we are seen, heard, and felt. I love playing with emerging media to push the boundaries of what’s possible and to help make a difference.</h5>
                <p>Currently, I'm a product designer at Bold Commerce building world class applications for e-commerce platforms. Before that, I studied graphic design at Red River College in Winnipeg, MB. Check out my resume to see more details about my last 5 years as a product designer.</p>
                <p>Outside of work, I'm a casual photographer and avid collector of action figures and sneakers. Consumer of many music genres and self proclaimed movie buff, <a href="https://letterboxd.com/jodeci/">here's a snapshot of my movie taste.</a></p>
              </div>
            </div>

          </section>

            <Footer />
        </main>
      </React.Fragment>
      )
    }
}
