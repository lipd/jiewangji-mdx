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
  :hover {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

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
      <Col>
        <ColumnPreview column={column} />
      </Col>
    ))}
  </Row>
)

export default ColumnGrid
