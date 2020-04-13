import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fontFamily } from '../components/styles'
import { Link } from 'gatsby'
import logo from './assets/svg/logo.svg'
import githubIcon from './assets/svg/github-white.svg'
import wechatIcon from './assets/svg/wechat-white.svg'
import zhihuIcon from './assets/svg/zhihu-white.svg'

const headerStyle = css`
  background-color: ${colors.black};
  font-family: ${fontFamily.yuanti};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 calc((100% - 1000px) / 2);

  nav {
    display: flex;
    align-items: center;
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
    font-size: 1.4rem;
    font-family: ${fontFamily.heiti};
    margin-right: 3rem;
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

const Header = () => (
  <header css={headerStyle}>
    <nav>
      <NavLink className="brand">
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
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <NavIcon src={wechatIcon} alt="微信公众号" to="/" />
      <NavIcon
        src={zhihuIcon}
        alt="知乎"
        to="https://www.zhihu.com/people/albertli063"
      />
      <NavIcon src={githubIcon} alt="github" to="https://github.com/lipd" />
    </div>
  </header>
)

export default Header
