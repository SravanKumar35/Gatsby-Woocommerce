/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const productTemplate = path.resolve("src/templates/product-template.js")

  return graphql(`
    {
      allWcProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(res => {
      if(res.errors) {
          return Promise.reject(res.errors)
      }

      res.data.allWcProducts.edges.forEach(({node}) => {
          createPage({
              path: node.slug,
              component: productTemplate,
              context: {
                  slug: node.slug,
              }
              
          })
      })
  })
  
}
