import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Row, Col4 } from './grid'
import { fontFamily, colors } from './styles'

const articleStyle = css`
  padding: 1rem;
  border: 1px solid ${colors.grey};

  :hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-color: transparent;
  }

  h2 {
    font-family: ${fontFamily.yuanti};
    font-size: 14px;
    font-weight: normal;
    margin: 1rem 0;
  }
  p {
    color: ${colors.light};
    font-size: 14px;
    line-height: 1.2em;
  }
`

const NaodongGrid = ({ posts }) => (
  <Row>
    {posts.map((post) => (
      <Col4>
        <Link to={`post/${post.slug}`}>
          <article css={articleStyle}>
            <div
              css={css`
                height: 150px;
                background-color: #d4d4d4;
              `}
            />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        </Link>
      </Col4>
    ))}
  </Row>
)

export default NaodongGrid
