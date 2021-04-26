import React from "react"
import { graphql } from "gatsby"
import '../pages/index.css';
import Navbar from '../components/Navbar';
import IndexFooter from '../components/IndexFooter';
import Footer from '../components/Footer';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <Navbar />
      <div className="grid">
        <div className="blog--header">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="grid blog--container">
          <div
            className="blog--content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <IndexFooter />
      <Footer />

    </React.Fragment>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        thumbnail
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`
