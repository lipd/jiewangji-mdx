import { css } from '@emotion/core'
import { fontFamily } from './'

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 16px;
    background-color: #f4f7f9;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default globalStyle
