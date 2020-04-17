import { useStaticQuery, graphql } from 'gatsby'

const useColumns = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          title
          intro
          slug
          image {
            src {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const columns = data.allDataJson.nodes
  return columns.map((column) => ({
    title: column.title,
    intro: column.intro,
    slug: column.slug,
    image: column.image.src.sharp.fluid,
  }))
}

export default useColumns
