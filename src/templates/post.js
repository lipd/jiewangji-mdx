import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Post from '../components/post'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Post post={post} />
  </Layout>
)

export default PostTemplate
