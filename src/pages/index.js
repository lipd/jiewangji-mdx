import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ColumnGrid from '../components/column-grid'
import NaodongGrid from '../components/naodong-grid'
import useNaoDong from '../hooks/use-naodong'
import useColumns from '../hooks/use-columns'
import { fontFamily } from '../components/styles'

export default () => {
  const posts = useNaoDong()
  const columns = useColumns()

  const Title = styled('h1')`
    font-family: ${fontFamily.yuanti};
    font-weight: normal;
    margin-bottom: 1.5rem;
  `

  return (
    <Layout home>
      <Title>专栏</Title>
      <ColumnGrid columns={columns} />
      <Title>脑洞</Title>
      <NaodongGrid posts={posts} />
    </Layout>
  )
}
