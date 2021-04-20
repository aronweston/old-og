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
            title
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
  data.allShopifyCollection.edges.forEach(({ node }) => {
    //Category
    createPage({
      path: `deli/${node.handle}/`,
      component: path.resolve(`./src/templates/Category/index.js`),
      context: {
        handle: node.handle,
        isCollection: true,
        collectionTitle: node.title,
      },
    });

    //Products
    node.products.map(product => {
      createPage({
        path: `deli/${node.handle}/${product.handle}/`,
        component: path.resolve(`./src/templates/Product/index.js`),
        context: {
          shopifyId: product.shopifyId,
          productTitle: product.title,
          collectionHandle: node.handle,
          productHandle: product.handle,
        },
      });
    });
  });
};
