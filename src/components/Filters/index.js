import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import CategoryFilter from './CategoryFilter';
import { FiltersWrapper } from './styles';

export const Filters = () => {
  const { collections } = useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategoryFilter
          key={collection.shopifyId}
          title={collection.title}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
};
