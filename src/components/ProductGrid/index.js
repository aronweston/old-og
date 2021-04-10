import React from 'react';
import { ProductGridWrapper } from './styles';
import ProductTile from './ProductTile';

const ProductGrid = ({ products }) => {
  console.log(products);
  return (
    <ProductGridWrapper>
      {products?.map(product => (
        <ProductTile
          key={product.product.shopifyId}
          title={product.product.title}
          description={product.product.description}
          price={product.product.priceRange.minVariantPrice.amount}
          image={product.product.images[0].localFile.childImageSharp.fluid}
          productHandle={product.product.handle}
          collectionHandle={product.collection.handle}
          collectionTitle={product.collection.title}
        />
      ))}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
