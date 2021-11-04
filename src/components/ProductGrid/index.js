import React from 'react';
import { ProductGridWrapper } from './styles';
import ProductTile from './ProductTile';

export const ProductGrid = ({ products, isSearch, searchClose }) => {
  return (
    <ProductGridWrapper>
      {products?.map(p => {
        const { shopifyId, title, priceRange, images, handle } = p.product;
        return (
          <ProductTile
            searchClose={searchClose}
            isSearch={isSearch}
            key={shopifyId}
            title={title}
            price={priceRange.minVariantPrice.amount}
            image={images[0].originalSrc}
            productHandle={handle}
            collectionHandle={p.collection.handle}
            collectionTitle={p.collection.title}
          />
        );
      })}
    </ProductGridWrapper>
  );
};
