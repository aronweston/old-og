import React, { useContext, useEffect, useState } from 'react';
import ProductGrid from '../ProductGrid';
import ProductContext from 'context/ProductContext';

export const FeaturedProducts = () => {
  const { featuredProducts, allProducts, products } = useContext(
    ProductContext
  );
  return (
    <section>
      <h1>Our Favourites</h1>
      <ProductGrid products={featuredProducts} />
    </section>
  );
};
