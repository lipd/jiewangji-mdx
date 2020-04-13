import { css } from '@emotion/core'

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

export default globalStyle
