import React from 'react';
import { SearchGridWrapper } from './styles';
import ProductTile from '../ProductGrid/ProductTile';

export const SearchGrid = ({ products }) => {
  return (
    <SearchGridWrapper>
      {products?.map(product => (
        <ProductTile
          key={product.product.shopifyId}
          title={product.product.title}
          description={product.product.description}
          price={product.product.priceRange.minVariantPrice.amount}
          image={product.product.images[0].localFile.childImageSharp.fluid}
          productHandle={product.product.handle}
          collectionHandle={product.collection.handle}
          collectionTitle={product.collection.title}
        />
      ))}
    </SearchGridWrapper>
  );
};
