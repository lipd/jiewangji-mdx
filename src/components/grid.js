import styled from '@emotion/styled'

export const Row = styled('section')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export const Col = styled('div')`
  margin-bottom: 20px;
  flex: 0 0 100%;
`

export const Col3 = styled(Col)`
  @media (min-width: 480px) {
    flex: 0 0 48%;
  }
  @media (min-width: 768px) {
    flex: 0 0 32%;
  }
`

export const Col4 = styled(Col)`
  @media (min-width: 480px) {
    flex: 0 0 32%;
  }
  @media (min-width: 768px) {
    flex: 0 0 23.5%;
  }
`
