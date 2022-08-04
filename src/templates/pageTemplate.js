import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo";

const Template = ({ data: {
    markdownRemark: {
        frontmatter,
        html
    }
} }) => (
    <>
        <SEO title={frontmatter.title} defer={false} />
        <div className="container">
            <div
                id="markdown"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </>
 )

export default Template;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
