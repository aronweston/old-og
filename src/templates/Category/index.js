import React, { useContext } from 'react';
import { Container } from '../../components/Global/styles';
import { SEO, ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';

const BgImage = styled.div`
  position: relative;
  width: 100%;
  background-image: ${props => props.src && `url('${props.src}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${({ height }) => height};
  z-index: -1;
  color: white;

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

export const query = graphql`
  query CollectionQuery($handle: String) {
    shopifyCollection(handle: { eq: $handle }) {
      ...ShopifyCollectionFields
    }
  }
`;

const Category = ({ data }) => {
  const { allProducts } = useContext(ProductContext);
  const category = data.shopifyCollection;

  const categoryProducts = allProducts.filter(
    product => category.shopifyId === product.collection.shopifyId
  );

  console.log(category);
  return (
    <>
      <SEO title={category.title} description={category.description} />
      <BgImage src={category.image.src} height="300px">
        <Container>
          <div>
            <h1>{category.title}</h1>
          </div>
        </Container>
      </BgImage>
      <Container>
        <ProductGrid products={categoryProducts} />
      </Container>
    </>
  );
};

export default Category;
