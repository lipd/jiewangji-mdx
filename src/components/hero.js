import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { fontFamily, colors } from './styles'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
`

const TextBox = styled('div')`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 0.5rem;
    font-family: ${fontFamily.yuanti};
    color: ${colors.white_normal};
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nodes.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>结网集</h1>
        <p>我的学习足迹与一些胡思乱想</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
