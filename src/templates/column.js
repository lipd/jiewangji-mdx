import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { frontmatter: { column: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          slug
          author
        }
      }
    }
  }
`

const PostTemplate = ({
  pageContext,
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <h1>专栏简介</h1>
    <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    <h1>文章列表</h1>
    <pre>{JSON.stringify(posts)}</pre>
  </Layout>
)

export default PostTemplate
