import { useStaticQuery, graphql } from 'gatsby'

const useColumns = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          title
          intro
          slug
        }
      }
    }
  `)

  return data.allDataJson.nodes
}

export default useColumns
