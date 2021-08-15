import React, { useContext } from 'react';
import { ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';
import { FeaturedWrapper } from './styles';

export const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <FeaturedWrapper>
      <span>Our Favourites</span>
      <ProductGrid products={featuredProducts} />
    </FeaturedWrapper>
  );
};
