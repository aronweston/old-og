import React from 'react';
import { CollectionGridContainer } from './styles';
import { TileContent, Title, CollectionImage } from './styles';
import { Link } from '../Global';

function CollectionTile({ handle, title, backgroundImage }) {
  return (
    <CollectionImage image={backgroundImage}>
      <TileContent>
        <Title>{title}</Title>
        <Link primary to={`/deli/${handle}`}>
          Explore
        </Link>
      </TileContent>
    </CollectionImage>
  );
}

export const CollectionsGrid = ({ collections }) => {
  return (
    <CollectionGridContainer>
      {collections.map(collection => {
        const { title, handle, shopifyId, description, image } = collection;
        return (
          <CollectionTile
            title={title}
            handle={handle}
            key={shopifyId}
            description={description}
            backgroundImage={image.src}
          />
        );
      })}
    </CollectionGridContainer>
  );
};
