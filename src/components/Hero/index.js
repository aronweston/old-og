import React from 'react';
import { StaticImage as Image } from 'gatsby-plugin-image';
import { HeroContainer, TextWrapper, Title } from './styles';
import { Button } from '../Global/styles';

export const Hero = () => {
  return (
    <HeroContainer>
      <Image src="../../images/platter-left.png" alt="" />
      <TextWrapper>
        <Title>There's something for everyone at Olive & Grain</Title>
        <Button primary> Shop Now</Button>
        <Button> Click Me</Button>
      </TextWrapper>
      <Image src="../../images/platter-right.png" alt="" />
    </HeroContainer>
  );
};
