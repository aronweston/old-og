import React, { useContext } from 'react';
import { Filters, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import { Container } from '../components/Global/index.js';

export const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const DeliPage = () => {
  const { allProducts, collections } = useContext(ProductContext);
  return (
    <>
      <SEO title="The Deli" description="" keywords="" />
      <Container>
        <h1>The Deli</h1>
        <span>{allProducts.length} products</span>
        <Content>
          <Filters />
          <div>products</div>
        </Content>
      </Container>
    </>
  );
};

export default DeliPage;
