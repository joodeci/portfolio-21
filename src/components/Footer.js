import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../pages/index.css';
import './Footer.css';


class Footer extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <React.Fragment>
        <div class="grid">
          <h5 class="grid--title grid--title__footer">Index</h5>
        </div>
        <div class="grid footer-container">
          <div class="footer-links">
            {posts && posts.map(({ node: post }) => (
                <Link key={post.id} to={post.frontmatter.path}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
            ))}
          </div>
        </div>
        <div class="grid">
        <div class="footer-wrapup">
        <p>Made with love using: React.JS, Netlify and Gatsby<br/>
        © Jodeci Correa Scrapbook ‘21</p>
        </div>
        <p className="footer-links footer-links__socialmedia">
          <Link to="https://www.instagram.com/joodeci">Instagram</Link>
          <Link to="https://www.twitter.com/joodeci">Twitter</Link>
          <Link to="https://www.are.na/joodeci">Are.na</Link>
          <Link to="https://www.linkedin.com/in/jodeci-correa-a4a4a2b5/">LinkedIn</Link>
          <Link to="mailto:jodecic@gmail.com">Email</Link>
        </p>
        </div>
      </React.Fragment>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Footer data={data} count={count} />}
  />
)
