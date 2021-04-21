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

  const categoryProducts = allProducts.filter(
    product => category.shopifyId === product.collection.shopifyId
  );

  return (
    <>
      <SEO title={category.title} description={category.description} />
      <BgImage
        title={category.title}
        fluid={category.image?.localFile.childImageSharp.fluid}
        overlayColor="#04040454"
        height="300px"
      >
        <Container>
          <div>
            <h1>{category.title}</h1>
          </div>
        </Container>
      </BgImage>
      <Container>
        <GridContainer>
          <ProductGrid products={categoryProducts} />
        </GridContainer>
      </Container>
    </>
  );
};

export default Category;
