import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import useSiteMetadata from '../hooks/use-sitemetadata'
import { globalStyle } from '../components/styles'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global styles={globalStyle} />
      <Helmet>
        <html lang="zh-CN" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          padding: 2rem calc((100% - 1000px) / 2);
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
