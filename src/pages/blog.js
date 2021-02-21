import React from 'react';
import './index.css';
import BlogRoll from '../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5>All Case Studies</h5>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
