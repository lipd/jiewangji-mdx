import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { fontFamily } from './styles'

const Article = styled('article')`
  figure {
    align-items: center;
    justify-content: center;
  }

  .title {
    font-family: ${fontFamily.songti};
    font-size: 2.25rem;
    text-align: center;
    padding: 0 4em;
    margin-bottom: 1em;
  }

  .post {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fontFamily.songti};
      margin: 1em 0 1em;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 1rem;
    }

    h6 {
      font-size: 1rem;
    }

    p {
      font-family: ${fontFamily.heiti};
      color: #848484;
      font-weight: lighter;
      line-height: 1.38rem;
      margin-bottom: 1rem;
    }
  }
`

const imageStyle = css`
  margin: 0 auto 4rem;
  max-height: 400px;
`

const Post = ({ post }) => (
  <Article>
    <header>
      <h1 className="title">{post.frontmatter.title}</h1>
      <figure>
        <Image
          css={imageStyle}
          fluid={post.frontmatter.image.sharp.fluid}
          fadeIn
        />
      </figure>
    </header>
    <section className="post">
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Article>
)

export default Post
