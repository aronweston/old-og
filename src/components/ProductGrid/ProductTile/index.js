import React from 'react';
import { TileWrapper, Title, Description, Price, Button } from './style';
import Image from 'gatsby-image';

const ProductTile = ({
  title,
  image,
  price,
  description,
  collectionHandle,
  collectionTitle,
  productHandle,
}) => {
  console.log(collectionHandle, collectionTitle);
  return (
    <TileWrapper>
      <Image fluid={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>From ${parseInt(price).toFixed(2)}</Price>
      <Button to={`/deli/${collectionHandle}/${productHandle}`}>Link</Button>
    </TileWrapper>
  );
};

export default ProductTile;
