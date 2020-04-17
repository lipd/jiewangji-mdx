import { useStaticQuery, graphql } from 'gatsby'

const useNaoDong = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^naodong/.+.mdx/" } }) {
        nodes {
          childMdx {
            excerpt
            frontmatter {
              title
              slug
              author
              image {
                sharp: childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map((file) => ({
    title: file.childMdx.frontmatter.title,
    slug: file.childMdx.frontmatter.slug,
    author: file.childMdx.frontmatter.author,
    image: file.childMdx.frontmatter.image,
    excerpt: file.childMdx.excerpt,
  }))
}

export default useNaoDong
