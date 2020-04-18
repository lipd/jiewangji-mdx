import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
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
      {home ? <Hero title={title} description={description} /> : <Header />}
      <main
        css={css`
          padding: 2rem calc((100% - 1000px - 3rem) / 2);
          margin: 0 1.5rem;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
