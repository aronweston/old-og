import React from 'react';
import { TileWrapper, Title, Description, Price, Button } from './style';
import Image from 'gatsby-image';

const ProductTile = ({
  title,
  image,
  price,
  // description,
  collectionHandle,
  // collectionTitle,
  productHandle,
}) => {
  return (
    <TileWrapper to>
      <Image fluid={image} />
      <Title>{title}</Title>
      <Price>From ${parseInt(price).toFixed(2)}</Price>
      <Button secondary to={`/deli/${collectionHandle}/${productHandle}`}>
        Buy now
      </Button>
    </TileWrapper>
  );
};

export default ProductTile;
