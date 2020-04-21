import { useStaticQuery, graphql } from 'gatsby'

const useNaoDong = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { column: { eq: "naodong" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 472
                  maxHeight: 368
                  cropFocus: CENTER
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))
}

export default useNaoDong
