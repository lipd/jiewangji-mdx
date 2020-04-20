import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fontFamily } from '../components/styles'
import { Link } from 'gatsby'
import logo from './assets/svg/logo.svg'
import githubIcon from './assets/svg/github-white.svg'
import wechatIcon from './assets/svg/wechat-white.svg'
import zhihuIcon from './assets/svg/zhihu-white.svg'

const StyledHeader = styled('header')`
  position: absolute;
  background-color: transparent;
  font-family: ${fontFamily.yuanti};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 40px;
  -webkit-font-smoothing: subpixel-antialiased;

  nav {
    display: flex;
    align-items: center;
  }

  .icons {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const NavLink = styled(Link)`
  color: ${colors.white_normal};
  text-decoration: none;
  margin-right: 1.2rem;
  letter-spacing: 0.1rem;
  font-size: 1rem;

  &.brand {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-right: 3rem;
    font-family: ${fontFamily.kaiti};
  }

  img {
    margin-right: 10px;
  }
`

const Icon = styled('img')`
  height: 32px;
  width: 32px;
  margin-left: 1rem;
`

const NavIcon = ({ src, alt, to }) => (
  <a href={to}>
    <Icon src={src} alt={alt} />
  </a>
)

const Header = ({ home }) => (
  <StyledHeader home={home}>
    <nav>
      <NavLink className="brand" to="/">
        <img
          css={css`
            height: 38px;
            width: 38px;
          `}
          src={logo}
          alt="logo"
        />
        结网集
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/author/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
    </nav>
    <div className="icons">
      <NavIcon src={wechatIcon} alt="微信公众号" to="/" />
      <NavIcon
        src={zhihuIcon}
        alt="知乎"
        to="https://www.zhihu.com/people/albertli063"
      />
      <NavIcon src={githubIcon} alt="github" to="https://github.com/lipd" />
    </div>
  </StyledHeader>
)

export default Header
