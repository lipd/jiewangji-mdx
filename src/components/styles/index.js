import globalStyle from './global'
import { css } from '@emotion/core'

export const colors = {
  black: '#090a0b',
  light: '#697b8c',
  grey: '#f0f0f0',
  white_normal: '#cfd0d0',
  white_bright: '#ffffff',
}

export const fontFamily = {
  yuanti: 'STYuanti-SC-Regular, YouYuan',
  heiti: "'STHeiti', MicrosoftYaHei",
  songti: 'STSongti-SC-Bold, SimSun',
}

export const shadow = css`
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

const styles = {
  globalStyle,
  colors,
  fontFamily,
}

export default styles
