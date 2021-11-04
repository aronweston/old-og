import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper, ImageThumbnailWrapper } from './styles';

function ImageThumbnail({ isActive, onClick, image }) {
  return (
    <ImageThumbnailWrapper onClick={() => onClick(image)} isActive={isActive}>
      <img src={image.originalSrc} />
    </ImageThumbnailWrapper>
  );
}

export const ImageGallery = ({ selectedVariantImageId, images }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <ImageGalleryWrapper>
      <div>
        <img src={activeImageThumbnail.originalSrc} />
      </div>
      <div>
        {images.length > 1 &&
          images.map(image => (
            <ImageThumbnail
              key={image.id}
              onClick={handleClick}
              isActive={activeImageThumbnail.id === image.id}
              image={image}
            />
          ))}
      </div>
    </ImageGalleryWrapper>
  );
};
