import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

const Wrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`

const Main = styled('main')`
  flex: 1;
  margin: 4rem 1.5rem 0;
  padding: 0 calc((100% - 1080px - 3rem) / 2) 3rem;

  h1 {
    margin: 1em 0;
    color: #363636;
  }

  h1:first-of-type {
    margin-top: 0;
  }

  p {
    margin: 1.5em 0;
    color: #4a4a4a;
  }

  a {
    color: #3273dc;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { column: { eq: "other" }, slug: { eq: "about" } }) {
        body
      }
    }
  `)

  return (
    <Layout light>
      <Wrapper>
        <Header light />
        <Main>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Main>
        <Footer />
      </Wrapper>
    </Layout>
  )
}
