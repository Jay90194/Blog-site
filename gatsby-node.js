const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allContentfulAllblogs {
      edges {
        node {
          slug
        }
      }
    }
  }
`)

  result.data.allContentfulAllblogs.edges.forEach(({node}) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/template/Allblog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}

