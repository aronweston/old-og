import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  fragment ProductTileFields on ShopifyProduct {
    priceRange {
      minVariantPrice {
        amount
      }
    }
    variants {
      price
    }
  }
  {
    allShopifyProduct {
      edges {
        node {
          ...ShopifyProductFields
          ...ProductTileFields
        }
      }
    }
    allShopifyCollection(sort: { order: ASC, fields: updatedAt }) {
      edges {
        node {
          ...ShopifyCollectionFields
          products {
            ...ShopifyProductFields
            ...ProductTileFields
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection, allShopifyProduct } = useStaticQuery(query);

  const featuredProducts = () => {
    let featuredProducts = [];
    allShopifyCollection.edges.map(({ node }) => {
      node.products.map(product => {
        if (product.tags.includes('featured')) {
          featuredProducts.push({ product, collection: node });
        }
      });
    });
    if (featuredProducts.length > 0) return featuredProducts;
  };

  const allProducts = () => {
    let allProducts = [];
    allShopifyCollection.edges.map(({ node: collection }) => {
      collection.products.map(product => {
        allProducts.push({ product, collection });
      });
    });
    return allProducts;
  };

  return (
    <ProductContext.Provider
      value={{
        featuredProducts: featuredProducts(),
        allProducts: allProducts(),
        collections: allShopifyCollection.edges.map(({ node }) => node),
        products: allShopifyProduct.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
