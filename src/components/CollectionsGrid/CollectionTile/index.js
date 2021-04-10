import React from 'react';
import {
  CollectionTileWrapper,
  TileContent,
  Title,
  Description,
  CollectionImage,
} from './styles';

const CollectionTile = ({ handle, title, backgroundImage }) => {
  return (
    <CollectionImage fluid={backgroundImage}>
      <TileContent>
        <Title>{title}</Title>
      </TileContent>
    </CollectionImage>
  );
};

export default CollectionTile;
