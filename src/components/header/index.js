import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { fontFamily } from '../styles'
import { Link } from 'gatsby'
import logo from '../assets/svg/logo.svg'
import githubIcon from '../assets/svg/github-white.svg'
import wechatIcon from '../assets/svg/wechat-white.svg'
import zhihuIcon from '../assets/svg/zhihu-white.svg'
import '../assets/css/hamburgers.css'

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
      position: relative;
    }
  }
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 0.6rem;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;
  font-weight: normal;

  &.brand {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-right: 2.4rem;
    font-family: ${fontFamily.kaiti};
    font-weight: bold;
  }

  img {
    margin-right: 10px;
  }
`

const Icon = styled('img')`
  height: 32px;
  width: 32px;
`

const NavIcon = ({ src, alt, to }) => (
  <a
    href={to}
    css={css`
      display: flex;
      margin-left: 1rem;
      &:first-of-type {
        margin: 0;
      }
    `}
  >
    <Icon src={src} alt={alt} />
  </a>
)

const Hamburger = ({ toggle, setToggle }) => {
  return (
    <button
      className={`hamburger hamburger--elastic ${toggle ? 'is-active' : ''}`}
      onClick={() => setToggle(!toggle)}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}

const BurgerWrapper = styled('div')`
  position: absolute;
  z-index: 999;
  right: 20px;
  top: 16px;
  @media (min-width: 768px) {
    display: none;
  }
`

const Menu = styled('ul')`
  position: absolute;
  z-index: 998;
  right: 0;
  top: 0;
  padding: 3.2rem 0 1rem;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.69);
  @media (min-width: 768px) {
    display: none;
  }

  &.close {
    display: none;
    background-color: red;
  }

  li {
    flex: 1;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li:hover {
    background-color: rgba(99, 99, 99, 0.25);
  }
`

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledHeader>
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
        <div
          css={css`
            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/author/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </div>
        <BurgerWrapper>
          <Hamburger toggle={toggle} setToggle={setToggle} />
        </BurgerWrapper>
        <Menu className={`${toggle ? '' : 'close'}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/author/">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact/">Contact</NavLink>
          </li>
          <li>
            <div
              css={css`
                display: flex;
              `}
            >
              <NavIcon src={wechatIcon} alt="微信公众号" to="/" />
              <NavIcon
                src={zhihuIcon}
                alt="知乎"
                to="https://www.zhihu.com/people/albertli063"
              />
              <NavIcon
                src={githubIcon}
                alt="github"
                to="https://github.com/lipd"
              />
            </div>
          </li>
        </Menu>
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
}

export default Header