import React from 'react'
import { Global, css } from '@emotion/core'
import Header from '../components/header'

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
`

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyle} />
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
