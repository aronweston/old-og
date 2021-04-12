import React, { useContext } from 'react';
import { GridContainer, BgImage } from './styles';
import { Container } from '../../components/Global/styles';
import { SEO, ProductGrid } from 'components';
import ProductContext from 'context/ProductContext';

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

  const categoryProducts = allProducts.filter(product => {
    console.log(product.shopifyId);
    if (category.shopifyId === product.collection.shopifyId) {
      return product;
    }
  });

  console.log(categoryProducts);

  return (
    <>
      <SEO title={category.title} description={category.description} />
      <Container>
        <BgImage
          title={category.title}
          fluid={category.image?.localFile.childImageSharp.fluid}
          overlayColor="#04040454"
          height="300px"
        >
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </BgImage>
        <GridContainer>
          <ProductGrid products={categoryProducts} />
        </GridContainer>
      </Container>
    </>
  );
};

export default Category;
