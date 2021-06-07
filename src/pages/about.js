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
                <h1>I'm Jodeci Correa. Product designer and occasional American R&B quartet</h1>
                <h5>My work combines a background in graphic design, along with technology and user focused design thinking. I believe in technology and design as a means to connect and shape how humans around the world are seen, heard, and felt. My ethos in life is to always improve and leave things better than the way I found them.</h5>
                <p>Currently, I'm a product designer on the Subscriptions team at <a href="https://boldcommerce.com/">Bold Commerce.</a> I help design and build world class applications for e-commerce platforms such as Shopify, BigCommerce, and WooCommerce. During my time here I have been responsible for all phases of the design process, from spearheading design sprints, leading design thinking workshops, conducting user research and testing, to wireframing and prototyping high fidelity mock ups.</p>
                <p>Before that, I studied graphic design at Red River College in Winnipeg, MB. <a href="https://www.figma.com/file/83Z1rCwQJsEWBGnBRbexac/Resume?node-id=2%3A2">Check out my resume to see more details about my ever growing career as a designer.</a></p>
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
