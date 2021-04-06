const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            handle
            shopifyId
            products {
              handle
              shopifyId
            }
          }
        }
      }
    }
  `);

  try {
    data.allShopifyCollection.edges.forEach(({ node }) => {
      //Category
      createPage({
        path: `deli/${node.handle}/`,
        component: path.resolve(`./src/templates/Category/index.js`),
        context: {
          handle: node.handle,
        },
      });

      //Products
      node.products.map(product => {
        createPage({
          path: `deli/${node.handle}/${product.handle}/`,
          component: path.resolve(`./src/templates/Product/index.js`),
          context: {
            shopifyId: product.shopifyId,
            productHandle: product.handle,
            collectionHandle: node.handle,
          },
        });
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};
