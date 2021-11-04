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
  { shopifyId: 1, handle: '/', title: 'Home' },
  { shopifyId: 2, handle: '/deli', title: 'The Deli' },
  { shopifyId: 3, handle: '/contact', title: 'Contact' },
  { shopifyId: 4, handle: '/cart', title: 'Checkout' },
  { shopifyId: 5, handle: '/terms', title: 'Terms & Conditions' },
  { shopifyId: 6, handle: '/privacy', title: 'Privacy Policy' },
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
            <FooterList
              title="Categories"
              isCollection={true}
              data={collections}
            />
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
          <a href="https://aronweston.com" target="_blank" rel="noreferrer">
            Website by <strong>Aron Weston</strong>
          </a>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
///comment for build