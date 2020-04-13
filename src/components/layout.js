import React from 'react'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import useSiteMetadata from '../hooks/use-sitemetadata'

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

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
