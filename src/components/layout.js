import React from 'react'
import { Global } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import useSiteMetadata from '../hooks/use-sitemetadata'
import styles from '../components/styles'

const Layout = ({ children, home }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global styles={styles.globalStyle} />
      <Helmet>
        <html lang="zh-CN" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {home && <Hero title={title} description={description} />}
      {children}
    </>
  )
}

export default Layout
