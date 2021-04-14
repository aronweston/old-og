import React from 'react';
import { FooterWrapper, FooterGrid, NavList, Copyright } from './styles';
import { Link } from 'gatsby';

import { Container } from '../Global';
import FooterList from './FooterList';

const pages = [
  { handle: '/', title: 'Home' },
  { handle: '/deli', title: 'The Deli' },
  { handle: '/contact', title: 'Contact' },
  { handle: '/cart', title: 'Checkout' },
  { handle: '/terms', title: 'Terms & Conditions' },
  { handle: '/privacy', title: 'Terms & Conditions' },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>
        <div>Logo</div>
        <nav>{/* <FooterList data={} /> */}</nav>
        <FooterList />
        <FooterList />
      </FooterGrid>

      <Copyright>
        <span>Copyright © {new Date().getFullYear()} </span>
        <Link to="/">Olive Grain, All rights reserved.</Link>
        <p>
          Website by <strong>Aron Weston</strong>
        </p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
