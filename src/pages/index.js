import React, { useContext } from 'react';
import { SEO, Hero } from 'components';
import { Container } from '../components/Global/styles';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  );
};

export default IndexPage;
