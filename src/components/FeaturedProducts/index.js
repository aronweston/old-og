import React, { useContext } from 'react';
import { ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';
import { FeaturedWrapper } from './styles';

export const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <FeaturedWrapper>
      <h1>Our Favourites</h1>
      <ProductGrid products={featuredProducts} />
    </FeaturedWrapper>
  );
};
