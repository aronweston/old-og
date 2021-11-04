import { graphql } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    title
    handle
    shopifyId
    description
    tags
    images {
      id
      originalSrc
    }
    variants {
      weight
      weightUnit
    }
  }
`;

export const collectionFields = graphql`
  fragment ShopifyCollectionFields on ShopifyCollection {
    handle
    title
    shopifyId
    description
    # tags
    image {
      src
    }
  }
`;
