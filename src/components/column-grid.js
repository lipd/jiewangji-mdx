import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { colors, fontFamily, shadow } from './styles'
import { Row, Col3 } from './grid'

const articleStyle = css`
  :hover {
    ${shadow}
    .container {
      border-color: transparent;
    }
  }

  .container {
    padding: 1rem;
    border: 1px solid ${colors.grey};
    border-top: none;
  }

  h2 {
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    color: ${colors.light};
  }
`

const ColumnPreview = ({ column }) => (
  <article css={articleStyle}>
    <Link to={`/${column.slug}/`}>
      <Image fluid={column.image} fadeIn />
      <div className="container">
        <h2>{column.title}</h2>
        <p>{column.intro}</p>
      </div>
    </Link>
  </article>
)

const ColumnGrid = ({ columns }) => (
  <Row>
    {columns.map((column) => (
      <Col3 key={column.slug}>
        <ColumnPreview column={column} />
      </Col3>
    ))}
  </Row>
)

export default ColumnGrid
