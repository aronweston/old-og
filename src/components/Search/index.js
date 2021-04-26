import React, { useState, useContext } from 'react';
import {
  SearchWrapper,
  TitleBlock,
  SearchInput,
  ScrollContainer,
  HeaderContainer,
} from './styles';
import { ProductGrid } from 'components';

import ProductContext from 'context/ProductContext';

export const Search = ({ visible, close }) => {
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
    <SearchWrapper visible={visible ? true : null}>
      <HeaderContainer>
        <TitleBlock>
          <strong>
            {search.length > 0
              ? `${searchProducts.length} Results for "${search}"`
              : 'Search'}
          </strong>
          <button onClick={close}>x</button>
        </TitleBlock>
        <SearchInput
          value={search}
          placeholder="Search for your product"
          onChange={e => handleSearch(e.target.value)}
        />
      </HeaderContainer>
      <ScrollContainer>
        <ProductGrid
          searchClose={close}
          isSearch={true}
          products={searchProducts}
        />
      </ScrollContainer>
    </SearchWrapper>
  );
};
