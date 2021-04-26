import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../pages/index.css';
import './BlogRoll.css';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div class="grid">
        {posts && posts.map(({ node: post }) => (
          <a className="card" key={post.id} href={post.frontmatter.path}>
            <article className={`grid blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
              <div class="card--img">
                <img src={post.frontmatter.thumbnail}/>
              </div>
              <div class="card--content">
                  <h3 class="left card--header">{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.description || post.excerpt}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                path
                description
                title
                thumbnail
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
