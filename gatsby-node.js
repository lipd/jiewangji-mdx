exports.createPages = async ({ actions, graphql, reporter }) => {
  // create columns
  const columnsQuery = await graphql(`
    query {
      allDataJson {
        nodes {
          title
          slug
          intro
        }
      }
    }
  `)

  if (columnsQuery.errors) {
    reporter.panic('fail to create columns', columnsQuery.errors)
  }

  const columns = columnsQuery.data.allDataJson.nodes

  columns.forEach((column) => {
    actions.createPage({
      path: `${column.slug}`,
      component: require.resolve('./src/templates/column.js'),
      context: {
        title: `${column.title}`,
        slug: `${column.slug}`,
        intro: `${column.intro}`,
      },
    })
  })

  // create all posts
  const postQuery = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (postQuery.errors) {
    reporter.panic('fail to create posts', postQuery.errors)
  }

  const posts = postQuery.data.allMdx.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: `post/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `${post.frontmatter.slug}`,
      },
    })
  })
}
