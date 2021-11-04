import React from 'react';
import { TileWrapper, Title, Price, Button } from './style';
import Image from 'gatsby-image';

const ProductTile = ({
  title,
  image,
  price,
  isSearch,
  searchClose,
  collectionHandle,
  // collectionTitle,
  // description,
  productHandle,
}) => {
  return (
    <TileWrapper isSearch={isSearch}>
      <img src={image} />
      <Title>{title}</Title>
      <Price>From ${parseInt(price).toFixed(2)}</Price>
      <Button
        onClick={searchClose}
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
