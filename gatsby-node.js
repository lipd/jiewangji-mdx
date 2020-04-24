exports.createPages = async ({ actions, graphql, reporter }) => {
  // create posts of columns
  const columnPostsQuery = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { column: { nin: ["other", "naodong"] } } }
      ) {
        nodes {
          frontmatter {
            column
            slug
          }
        }
      }
    }
  `)

  if (columnPostsQuery.errors) {
    reporter.panic('fail to create posts of columns', columnPostsQuery.errors)
  }

  const columnPosts = columnPostsQuery.data.allMdx.nodes

  columnPosts.forEach((post) => {
    actions.createPage({
      path: `/column/${post.frontmatter.column}/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/column.js'),
      context: {
        column: `${post.frontmatter.column}`,
        slug: `${post.frontmatter.slug}`,
      },
    })
  })

  // create all naodongs
  const postQuery = await graphql(`
    query {
      allMdx(filter: { frontmatter: { column: { eq: "naodong" } } }) {
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
