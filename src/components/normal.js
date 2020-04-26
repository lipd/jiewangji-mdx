import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../components/styles'

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

  ${styles.typography.normal}
`

const Normal = ({ body }) => (
  <Layout light>
    <Wrapper>
      <Header light />
      <Main>
        <MDXRenderer>{body}</MDXRenderer>
      </Main>
      <Footer />
    </Wrapper>
  </Layout>
)

export default Normal
