import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { Grid, ProductContainer, BgImage } from './styles';
import { Container } from '../../components/Global/styles';
import { SEO } from 'components';

export const query = graphql`
  query CollectionQuery($handle: String) {
    shopifyCollection(handle: { eq: $handle }) {
      ...ShopifyCollectionFields
      products {
        ...ShopifyProductFields
        variants {
          price
        }
      }
    }
  }
`;

const Category = ({ data }) => {
  const category = data.shopifyCollection;
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
        <Grid>
          {category.products?.map(product => (
            <ProductContainer key={product.shopifyId}>
              <Link to={product.handle}>
                <Image
                  fluid={product.images[0].localFile?.childImageSharp.fluid}
                  alt={product.title}
                />
                <p>{product.title}</p>
                <span>{product.description}</span>
                <span>{product.variants[0].price}</span>
              </Link>
            </ProductContainer>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Category;
