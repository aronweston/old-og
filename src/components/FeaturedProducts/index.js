import React, { useContext } from 'react';
import { ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';

export const FeaturedProducts = () => {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <section>
      <h1>Our Favourites</h1>
      <ProductGrid products={featuredProducts} />
    </section>
  );
};
