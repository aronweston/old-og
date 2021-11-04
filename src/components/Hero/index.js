import React from 'react';
import { HeroContainer, BackgroundImage, Content } from './styles';
import { Link } from '../Global';
import { useLocation } from '@reach/router';

export const Hero = () => {
  const location = useLocation();
  return (
    <HeroContainer location={location.pathname}>
      <BackgroundImage>
        <div></div>
        <Content>
          <div>
            <h1>There's something for everyone at Olive & Grain</h1>
            <p>
              A family run deli with over 20 years experience, you can trust
              that from salty to sweet, we have you covered.
            </p>
            <Link to="/deli" primary>
              Shop Now
            </Link>
          </div>
        </Content>
        <div></div>
      </BackgroundImage>
    </HeroContainer>
  );
};
