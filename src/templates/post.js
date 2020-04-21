import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Header from '../components/header'
import Post from '../components/post'

const BgWrapper = styled('div')`
  width: 100%;
  z-index: -100;
  position: fixed;
  overflow: hidden;
  height: 70vh;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 575px) {
    height: 50vh;
  }
`

const BgImage = styled(BackgroundImage)`
  width: 100%;
  filter: blur(5px) brightness(0.7);
  transform: scale(1.05);
  height: 70vh;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 575px) {
    height: 50vh;
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        image {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const Main = styled('main')`
  width: 100%;
  margin-top: 25vh;
  position: absolute;
`

const PostWrapper = styled('section')`
  padding: 0 calc((100vw - 1000px - 4rem) / 2) 3rem;
`

const Base = styled('div')`
  position: absolute;
  z-index: -100;
  top: calc(70vh - 25vh);
  height: calc(100% - (70vh - 25vh));
  @media (max-width: 768px) {
    top: calc(60vh - 25vh);
    height: calc(100% - (60vh - 25vh));
  }
  /* WHY !!! */
  @media (max-width: 575px) {
    top: calc(50vh - 25vh - 1px);
    height: calc(100% - (50vh - 25vh));
  }
  width: 100%;
  background-color: #f4f7f9;
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <BgWrapper>
      <BgImage
        tag="background"
        fluid={post.frontmatter.image.sharp.fluid}
        fadeIn
      />
    </BgWrapper>
    <Header />
    <Main>
      <PostWrapper>
        <Post post={post} />
      </PostWrapper>
      <Base />
    </Main>
  </Layout>
)

export default PostTemplate
