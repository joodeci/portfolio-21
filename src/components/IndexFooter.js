import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../pages/index.css';
import './Footer.css';


class IndexFooter extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <React.Fragment>
        <div class="grid">
          <h5 class="grid--title grid--title__footer">INDEX</h5>
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
      </React.Fragment>
    )
  }
}

IndexFooter.propTypes = {
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
          sort: { order: DESC, fields: [frontmatter___title] }
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
    render={(data, count) => <IndexFooter data={data} count={count} />}
  />
)
