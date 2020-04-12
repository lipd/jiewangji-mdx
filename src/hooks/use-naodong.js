import { useStaticQuery, graphql } from 'gatsby'

const useNaoDong = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/^naodong//" } }) {
        nodes {
          childMdx {
            excerpt
            frontmatter {
              title
              slug
              author
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
    excerpt: file.childMdx.excerpt,
  }))
}

export default useNaoDong
