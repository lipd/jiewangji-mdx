import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Header from '../components/header'
import { fontFamily, colors } from '../components/styles'

export const query = graphql`
  query($slug: String!, $column: String!) {
    mdx(frontmatter: { column: { eq: $column }, slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }

    allMdx(
      filter: { frontmatter: { column: { eq: $column } } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          column
          slug
        }
      }
    }

    dataJson(slug: { eq: $column }) {
      title
    }
  }
`

const Menu = styled('nav')`
  position: fixed;
  top: 64px;
  left: 0;
  width: 18rem;
  height: calc(100vh - 64px);
  border-right: 1px solid #f0f0f2;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }

  h1 {
    padding: 1.5rem 2rem 1.5rem 1.5rem;
    color: ${colors.fontLightMuted};
    font-family: ${fontFamily.yuanti};
    font-size: 1rem;
    font-weight: normal;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 0.75rem 1rem 0.75rem 1.5rem;
    color: ${colors.fontLight};
    font-size: 0.9rem;
  }

  .active {
    color: ${colors.fontBlue};
    font-weight: bold;
  }
`

const MenuList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.frontmatter.slug}>
        <Link
          to={`/column/${post.frontmatter.column}/${post.frontmatter.slug}/`}
          activeClassName="active"
        >
          {post.frontmatter.title}
        </Link>
      </li>
    ))}
  </ul>
)

const Main = styled('main')`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`

const Article = styled('div')`
  flex: 1;
  margin: 0 3rem;
  padding: 2rem 0 3rem;
  max-width: 50rem;
  line-height: 1.5rem;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
  @media (max-width: 575px) {
    margin: 0 1.5rem;
  }

  h1.title {
    margin-top: 0;
  }

  h1,
  h2,
  h3 {
    margin: 3rem 0 1.5rem;
  }

  p {
    margin: 0 0 1.5rem;
  }

  pre {
    margin-bottom: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 1.5rem;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 0.85rem;
    overflow: auto;
  }
  code {
    overflow: auto;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.1rem;
  }
`

const PostTemplate = ({
  data: {
    mdx: post,
    allMdx: { nodes: posts },
    dataJson: { title: columnTitle },
  },
}) => (
  <Layout light>
    <Header light doc position="fixed" />
    <Menu>
      <h1>{columnTitle}</h1>
      <MenuList posts={posts} />
    </Menu>
    <div
      css={css`
        margin: 64px 0 0 18rem;
        @media (max-width: 768px) {
          margin-left: 0;
        }
        flex: 1;
      `}
    >
      <Main>
        <Article>
          <h1 className="title">{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Article>
        <Footer light />
      </Main>
    </div>
  </Layout>
)

export default PostTemplate
