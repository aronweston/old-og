import React, { useContext } from 'react';
import { SEO, Hero, FeaturedProducts, CollectionsGrid } from 'components';
import { Container } from '../components/Global/styles';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <>
      <SEO
        title={`Sydney Online Deli | Olive & Grain Delicatessen`}
        description="Sydney online deli from maroubra"
        keywords={['Sydney', 'deli']}
      />
      <Hero />
      <Container>
        <CollectionsGrid collections={collections} />
        <FeaturedProducts />
      </Container>
    </>
  );
};

export default IndexPage;
