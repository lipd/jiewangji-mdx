import React from 'react'
import Layout from '../components/layout'
import useNaoDong from '../hooks/use-naodong'
import useColumns from '../hooks/use-columns'

export default () => {
  const posts = useNaoDong()
  const columns = useColumns()

  return (
    <Layout>
      <h1>专栏</h1>
      {columns.map((column) => (
        <pre>{JSON.stringify(column, null, 2)}</pre>
      ))}
      <h1>脑洞</h1>
      {posts.map((post) => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
      }
    </Layout>
  )
}
