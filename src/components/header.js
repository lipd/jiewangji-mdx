import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fontFamily } from '../components/styles'
import { Link } from 'gatsby'

const headerStyle = css`
  background-color: ${colors.black};
  font-family: ${fontFamily.yuanti};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 calc((100vw - 1040px) / 2);
`

const NavLink = styled(Link)`
  color: ${colors.white_normal};
  text-decoration: none;
  margin-right: 1.2rem;
  letter-spacing: 0.2rem;
  font-size: 0.95rem;
`

const Header = () => (
  <header css={headerStyle}>
    <nav>
      <NavLink>首页</NavLink>
      <NavLink>作者</NavLink>
    </nav>
    <div>
      <NavLink>Wechat</NavLink>
      <NavLink>Github</NavLink>
      <NavLink>Zhihu</NavLink>
    </div>
  </header>
)

export default Header
