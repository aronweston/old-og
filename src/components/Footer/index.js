import React, { useContext } from 'react';
import {
  FooterWrapper,
  FooterGrid,
  Logo,
  Copyright,
  Icons,
  Facebook,
  Instagram,
  Phone,
  Email,
} from './styles';

import FooterList from './FooterList';
import ProductContext from 'context/ProductContext';

const pages = [
  { handle: '/', title: 'Home' },
  { handle: '/deli', title: 'The Deli' },
  { handle: '/contact', title: 'Contact' },
  { handle: '/cart', title: 'Checkout' },
  { handle: '/terms', title: 'Terms & Conditions' },
  { handle: '/privacy', title: 'Privacy Policy' },
];

const Footer = () => {
  const { featuredProducts, collections } = useContext(ProductContext);

  return (
    <FooterWrapper>
      <FooterGrid>
        <div>
          <Logo />
        </div>

        <div>
          <div>
            <FooterList title="Quick Links" data={pages} />
          </div>
          <div>
            <FooterList title="Categories" data={collections} />
          </div>
          <div>
            <FooterList title="Our Favourites" data={featuredProducts} />
          </div>
        </div>

        <Icons>
          <a
            href="https://facebook.com/theoliveandgrain"
            rel="noreferrer"
            target="_blank"
          >
            <Facebook />
          </a>
          <a
            href="https://facebook.com/theoliveandgrain"
            rel="noreferrer"
            target="_blank"
          >
            <Instagram />
          </a>
          <a href="tel:0400 000 000" rel="noreferrer" target="_blank">
            <Phone />
          </a>

          <a
            href="mailto: contact@oliveandgrain.com.au"
            rel="noreferrer"
            target="_blank"
          >
            <Email />
          </a>
        </Icons>
      </FooterGrid>
      <Copyright>
        <span>Copyright © {new Date().getFullYear()} </span>
        <span>Olive Grain, All rights reserved</span>
        <p>
          Website by <strong>Aron Weston</strong>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
