import React from 'react';
import { TileWrapper, Title, Price, Button } from './style';
import Image from 'gatsby-image';

const ProductTile = ({
  title,
  image,
  price,
  isSearch,
  collectionHandle,
  // collectionTitle,
  // description,
  productHandle,
}) => {
  return (
    <TileWrapper isSearch={isSearch}>
      <Image fluid={image} />
      <Title>{title}</Title>
      <Price>From ${parseInt(price).toFixed(2)}</Price>
      <Button
        secondary={isSearch ? false : true}
        primary={isSearch ? true : false}
        to={`/deli/${collectionHandle}/${productHandle}`}
      >
        Buy now
      </Button>
    </TileWrapper>
  );
};

export default ProductTile;
