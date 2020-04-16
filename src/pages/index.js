import React from 'react'
import Layout from '../components/layout'
import ColumnGrid from '../components/column-grid'
import NaodongGrid from '../components/naodong-grid'
import useNaoDong from '../hooks/use-naodong'
import useColumns from '../hooks/use-columns'

export default () => {
  const posts = useNaoDong()
  const columns = useColumns()

  return (
    <Layout>
      <h1>专栏</h1>
      <ColumnGrid columns={columns} />
      <h1>脑洞</h1>
      <NaodongGrid posts={posts} />
    </Layout>
  )
}
