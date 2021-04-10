import React from 'react';
import CollectionTile from './CollectionTile';
import { CollectionGridContainer } from './styles';

export const CollectionsGrid = ({ collections }) => {
  return (
    <CollectionGridContainer>
      {collections.map(collection => (
        <CollectionTile
          title={collection.title}
          handle={collection.handle}
          key={collection.shopifyId}
          description={collection.description}
          backgroundImage={collection.image?.localFile.childImageSharp.fluid}
        />
      ))}
    </CollectionGridContainer>
  );
};
