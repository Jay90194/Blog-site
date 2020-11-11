const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField ({
        node,
        name: 'slug',
        value: slug
    })
    
}
  }

module.exports.CreatePages = async ({graphql,actions }) => {
    const {CreatePage } = actions

    const blogTemplate = path.resolve('./src/template/blogtemplate.js')
    const res = await graphql(`
   query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
    }
    
    `)
    res.data.allMarkdownRemark.edges.forEach((edge)=>{
        CreatePage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}