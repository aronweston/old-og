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
      localFile {
        childImageSharp {
          fluid(maxWidth: 910) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
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
      localFile {
        childImageSharp {
          fluid(maxWidth: 910) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
