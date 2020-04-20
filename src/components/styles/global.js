import { css } from '@emotion/core'

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    background-color: #f4f7f9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default globalStyle
