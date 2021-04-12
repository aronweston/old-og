import React, { useState, useContext } from 'react';
import {
  SearchContainer,
  TitleBlock,
  SearchInput,
  ProductContainer,
} from './styles';
import { ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';

export const Search = ({ visible, crossClick }) => {
  const { allProducts } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [searchProducts, setSearchProducts] = useState();

  const handleSearch = value => {
    setSearch(value);
    const query = value.toLowerCase();

    setSearchProducts(
      allProducts.filter(
        product =>
          product.product.tags.map(tag => tag.toLowerCase()).includes(query) &&
          product
      )
    );
  };

  return (
    <SearchContainer visible={visible ? true : null}>
      <TitleBlock>
        <strong>
          {search.length > 0
            ? `${searchProducts.length} Results for ` + `"${search}"`
            : 'Search'}
        </strong>
        <button onClick={crossClick}>x</button>
      </TitleBlock>

      <SearchInput
        value={search}
        placeholder="Search for your product"
        onChange={e => handleSearch(e.target.value)}
      />

      <ProductContainer>
        <ProductGrid products={searchProducts} />
      </ProductContainer>
    </SearchContainer>
  );
};
