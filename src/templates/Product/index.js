import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, ImageGallery } from 'components';
import CartContext from 'context/CartContext';
import { Heading, Grid, Description } from './styles';

export const query = graphql`
  query ProductQuery($shopifyId: String, $handle: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      handle
      shopifyId
      description
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
    }
    shopifyCollection(products: { elemMatch: { handle: { eq: $handle } } }) {
      handle
      title
    }
  }
`;

const Product = ({ data, location }) => {
  const { getProductById } = useContext(CartContext);
  const staticProduct = data.shopifyProduct;
  const staticCollection = data.shopifyCollection;
  const [dynamicProduct, setDynamicProduct] = useState(null);

  useEffect(() => {
    getProductById(staticProduct.shopifyId).then(res => {
      setDynamicProduct(res);
    });
  }, [getProductById, setDynamicProduct]);

  return (
    <>
      <SEO title={`${staticProduct.title} | Olive & Grain Delicatessen`} />
      <Grid>
        <div>
          <a href="/deli">The Deli / </a>
          <a href={`/${staticCollection.handle}`}>
            {staticCollection.title} /{' '}
          </a>
          <a href={location.pathname}>{staticProduct.title}</a>
          <Heading>{staticProduct.title}</Heading>
          <p>{staticCollection.title}</p>
          <Description>{staticProduct.description}</Description>
          {dynamicProduct?.variants.map(product => (
            <>
              <span>
                ${product.price} / {product.weight}
              </span>
            </>
          ))}
          {dynamicProduct?.availableForSale && <h1>Out of stock</h1>}
        </div>
        <div>
          <ImageGallery images={staticProduct.images} />
        </div>
      </Grid>
    </>
  );
};

export default Product;
