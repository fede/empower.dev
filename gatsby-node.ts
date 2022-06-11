const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.tsx`)
  return graphql(
    `
      query pages($limit: Int) {
        allContentfulPage(limit: $limit) {
          edges {
            node {
              title
              slug
              contentfulparent {
                slug
                title
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulPage.edges.forEach((content) => {
      createPage({
        path: `${content.node.slug}`,
        component: pageTemplate,
        context: {
          title: content.node.title,
          body: content.node.body.childMarkdownRemark.html,
          parent: content.node.contentfulparent,
        },
      })
    })
  })
}
