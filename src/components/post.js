import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Article = styled('article')`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 9px 49px -8px rgba(0, 0, 0, 0.3);
  margin: 0 2rem;
  @media (max-width: 575px) {
    margin: 0 1rem;
  }

  figure {
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 0 6rem;
    color: white;
    font-size: 2.25rem;
    line-height: 1.3em;
    font-weight: normal;
    @media (max-width: 768px) {
      padding: 0 2rem;
      font-size: 1.7rem;
    }
    @media (max-width: 575px) {
      padding: 0 2rem;
      font-size: 1.6rem;
    }
  }

  .date {
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: #3393dc;
    margin: 1rem 0 1.6rem;
  }

  .post {
    color: #4a4a4a;
    padding: 2rem 6rem;
    line-height: 1.8;
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
    @media (max-width: 575px) {
      padding: 0 2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: black;
      margin: 1.3rem 0 1.3rem;
      font-weight: 400;
    }

    h1 {
      font-size: 1.45rem;
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
      font-weight: 400;
      margin: 1.3rem 0;
    }
  }
`

const Hero = styled(BackgroundImage)`
  height: 60vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 575px) {
    height: 40vh;
  }

  .darken-layer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    background-image: linear-gradient(0, #000, hsla(0, 0%, 100%, 0));
  }
`

const Post = ({ post }) => (
  <Article>
    <header>
      <Hero
        tag="section"
        fluid={post.frontmatter.image.sharp.fluid}
        fadeIn="soft"
      >
        <div className="darken-layer">
          <h1 className="title">{post.frontmatter.title}</h1>
          <p className="date">{post.frontmatter.date}</p>
        </div>
      </Hero>
    </header>
    <section className="post">
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Article>
)

export default Post
