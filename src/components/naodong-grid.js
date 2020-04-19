import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import { Row, Col4 } from './grid'
import { fontFamily, colors, shadow } from './styles'

const articleStyle = css`
  background-color: white;
  padding: 1rem;
  box-shadow: ${shadow.light};
  border-radius: 5px;

  :hover {
    box-shadow: ${shadow.dark};
    border-color: transparent;
  }

  h2 {
    font-family: ${fontFamily.yuanti};
    font-size: 1rem;
    font-weight: normal;
    margin: 1rem 0;
  }
  p {
    color: ${colors.light};
    font-size: 1rem;
    line-height: 1.2em;
  }
`

const NaodongGrid = ({ posts }) => (
  <Row>
    {posts.map((post) => (
      <Col4 key={post.slug}>
        <Link to={`post/${post.slug}`}>
          <article css={articleStyle}>
            <Image fluid={post.image.sharp.fluid} fadeIn />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        </Link>
      </Col4>
    ))}
  </Row>
)

export default NaodongGrid
