import React from 'react';
import { ProductGridWrapper } from './styles';
import ProductTile from './ProductTile';

export const ProductGrid = ({ products, isSearch, searchClose }) => {
  return (
    <ProductGridWrapper>
      {products?.map(product => (
        <ProductTile
          searchClose={searchClose}
          isSearch={isSearch}
          key={product.product.shopifyId}
          title={product.product.title}
          price={product.product.priceRange.minVariantPrice.amount}
          image={product.product.images[0].localFile.childImageSharp.fluid}
          productHandle={product.product.handle}
          collectionHandle={product.collection.handle}
          collectionTitle={product.collection.title}
        />
      ))}
    </ProductGridWrapper>
  );
};
