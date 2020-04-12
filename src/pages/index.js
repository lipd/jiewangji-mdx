import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Hello World!</h1>

      {posts.map((post) => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}
