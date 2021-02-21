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
      <div>
        {posts && posts.map(({ node: post }) => (
          <a className="card" key={post.id} href={post.frontmatter.path}>
            <article className={`grid card--content blog-list-item tile is-child box notification ${post.frontmatter.featuredpost ? 'is-featured' : ''}`}>
              <div class="card--img">
                <img src="https://media.comicbook.com/2019/12/pokemon-anime-mr-mime-1201289-1280x0.jpeg"/>
              </div>
              <div>
                  <h3 class="left">{post.frontmatter.title}<br/>—</h3>
                  <p>{post.excerpt}</p>
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
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
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
