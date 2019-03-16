/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const eventPageTemplate = path.resolve(`src/templates/event.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            contentful {
              events {
                id
                uri
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.contentful.events.forEach(({id, uri}) => {
          const path = '/meetup/' + uri;
          createPage({
            path,
            component: eventPageTemplate,
            // In your blog post template's graphql query, you can use eventId
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id,
              uri,
            },
          })
        })
      })
    )
  })
};
