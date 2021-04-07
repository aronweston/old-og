import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
// import SEO from '~/components/seo';
import { Grid } from './styles';

export const query = graphql`
  query CollectionQuery($handle: String) {
    shopifyCollection(handle: { eq: $handle }) {
      handle
      title
      shopifyId
      description
      products {
        handle
        title
        shopifyId
        description
        images {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        variants {
          price
        }
      }
    }
  }
`;

const Category = ({ data }) => {
  const category = data.shopifyCollection;
  console.log(category);
  return (
    <>
      {/* <SEO title={product.title} description={product.description} /> */}
      <h1>{category.title}</h1>
      <Grid>
        {category.products?.map(product => (
          <Link key={product.id} to={product.handle}>
            <Image fluid={product.images[0].localFile.childImageSharp.fluid} />
            <span>{product.title}</span>
            <span>{product.description}</span>
            <span>{product.variants[0].price}</span>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Category;
