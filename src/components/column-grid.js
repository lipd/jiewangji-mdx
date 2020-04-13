import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, fontFamily } from './styles'

const Row = styled('section')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Col = styled('div')`
  margin-bottom: 20px;
  flex: 0 0 100%;
  @media (min-width: 480px) {
    flex: 0 0 48%;
  }
  @media (min-width: 768px) {
    flex: 0 0 32%;
  }
`

const articleStyle = css`
  border: 1px solid ${colors.grey};
  h2 {
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.8rem;
    color: #697b8c;
  }
`

const ColumnPreview = ({ column }) => (
  <article css={articleStyle}>
    <Link to={`/${column.slug}/`}>
      <div
        css={css`
          height: 156px;
          background-color: #dfdfdf;
        `}
      />
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h2>{column.title}</h2>
        <p>{column.intro}</p>
      </div>
    </Link>
  </article>
)

const ColumnGrid = ({ columns }) => (
  <Row>
    {columns.map((column) => (
      <Col>
        <ColumnPreview column={column} />
      </Col>
    ))}
  </Row>
)

export default ColumnGrid
