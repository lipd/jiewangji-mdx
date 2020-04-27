import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Normal from '../components/normal'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { column: { eq: "other" }, slug: { eq: "contact" } }) {
        body
      }
    }
  `)
  return <Normal body={data.mdx.body} />
}
