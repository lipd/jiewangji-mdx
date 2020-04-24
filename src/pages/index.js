import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import ColumnGrid from '../components/column-grid'
import NaodongGrid from '../components/naodong-grid'
import Footer from '../components/footer'
import useNaoDong from '../hooks/use-naodong'
import useColumns from '../hooks/use-columns'
import { fontFamily } from '../components/styles'

export default () => {
  const posts = useNaoDong()
  const columns = useColumns()

  const Title = styled('h1')`
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    margin: 1rem 0 2rem;
  `

  return (
    <Layout home>
      <main
        css={css`
          padding: 2rem calc((100% - 1176px - 3rem) / 2) 5rem;
          margin: 0;
        `}
      >
        <Title>专栏</Title>
        <ColumnGrid columns={columns} />
        <Title>脑洞</Title>
        <NaodongGrid posts={posts} />
      </main>
      <Footer />
    </Layout>
  )
}
