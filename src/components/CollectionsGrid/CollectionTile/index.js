import React from 'react';
import { TileContent, Title, CollectionImage } from './styles';
import { Link } from '../../Global';

const CollectionTile = ({ handle, title, backgroundImage }) => {
  return (
    <CollectionImage fluid={backgroundImage}>
      <TileContent>
        <Title>{title}</Title>
        <Link primary to={`/deli/${handle}`}>
          Explore
        </Link>
      </TileContent>
    </CollectionImage>
  );
};

export default CollectionTile;
