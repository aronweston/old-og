/* eslint-disable jsx-a11y/no-onchange */

import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, ImageGallery, Quantity } from 'components';
import CartContext from 'context/CartContext';
import {
  Heading,
  Description,
  Breadcrumb,
  Grid,
  SelectWrapper,
  Price,
} from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { Container } from '../../components/Global/styles';

export const query = graphql`
  query ProductQuery($shopifyId: String, $handle: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
    shopifyCollection(products: { elemMatch: { handle: { eq: $handle } } }) {
      handle
      title
    }
  }
`;

const Product = ({ data }) => {
  const { getProductById } = useContext(CartContext);
  const staticProduct = data.shopifyProduct;
  const collection = data.shopifyCollection;
  const [dynamicProduct, setDynamicProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  useEffect(() => {
    getProductById(staticProduct.shopifyId).then(res => {
      setDynamicProduct(res);
      //get the first variant selected when the component renders; search the variants and find the one that matches the selected variant
      setSelectedVariant(
        res.variants.find(({ id }) => id === variantId) || res.variants[0]
      );
    });
  }, [getProductById, setDynamicProduct, staticProduct.shopifyId, variantId]);

  const handleChange = e => {
    const newVariant = dynamicProduct?.variants.find(
      v => v.id === e.target.value
    );
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      { replace: true }
    );
  };
  console.log(staticProduct);

  return (
    <>
      <SEO
        title={`${staticProduct.title} | Olive & Grain Delicatessen`}
        description={staticProduct.description}
        keywords={staticProduct.tags}
      />
      <Container>
        <Grid>
          <div>
            <Breadcrumb href="/deli">The Deli / </Breadcrumb>
            <Breadcrumb href={`/deli/${collection.handle}`}>
              {collection.title} /
            </Breadcrumb>
            <Breadcrumb active href={pathname + search}>
              {' '}
              {staticProduct.title}
              {dynamicProduct?.variants.length > 1 &&
                ' - ' + selectedVariant?.title}
            </Breadcrumb>
            <Heading>{staticProduct.title}</Heading>
            <p>{collection.title}</p>
            <p>{staticProduct.description}</p>
            {dynamicProduct?.availableForSale && (
              <>
                {dynamicProduct?.variants.length > 1 && (
                  <SelectWrapper>
                    <strong>{dynamicProduct.options[0].name}</strong>
                    <select value={selectedVariant?.id} onChange={handleChange}>
                      {dynamicProduct?.variants.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.title}
                        </option>
                      ))}
                    </select>
                  </SelectWrapper>
                )}
                {!!selectedVariant && (
                  <>
                    <Price>${selectedVariant?.price}</Price>
                    <Quantity
                      variantId={selectedVariant.id}
                      available={selectedVariant.available}
                    />
                  </>
                )}
              </>
            )}
          </div>
          <div>
            <ImageGallery
              selectedVariantImageId={selectedVariant?.image.id}
              images={staticProduct.images}
            />
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
