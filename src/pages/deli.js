import React, { useContext } from 'react';
import { Filters, SEO, ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import { Container } from '../components/Global/index.js';
import { useLocation } from '@reach/router';
import queryString from 'query-string';
export const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 200px 3fr;
`;

const DeliPage = () => {
  const { allProducts } = useContext(ProductContext);
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];

  const filterByCategory = products => {
    let filteredProducts = [];
    collectionIds.forEach(cId => {
      products.forEach(product => {
        if (product.collection.shopifyId === cId) {
          filteredProducts.push(product);
        }
      });
    });
    return filteredProducts.length === 0 ? allProducts : filteredProducts;
  };

  const filteredProducts = filterByCategory(allProducts);

  return (
    <>
      <SEO title="The Deli" description="" keywords={['deli', 'food']} />
      <Container>
        <h1>The Deli</h1>
        <span>{filteredProducts.length} products</span>
        <Content>
          <Filters />
          <ProductGrid products={filteredProducts} />
        </Content>
      </Container>
    </>
  );
};

export default DeliPage;
