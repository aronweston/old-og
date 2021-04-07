import React from 'react';
import { FooterWrapper, Instagram, Facebook } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container mx-auto">
        <div className="inline-flex gap-2 my-2">
          <a className="icon" href="https://facebook.com/oliveandgrain/">
            <Facebook width="35px" />
          </a>
          <a className="icon" href="https://instagram.com./oliveandgrain.com">
            <Instagram width="35px" />
          </a>
        </div>

        <div className="mx-auto text-xs text-center">
          Copyright © {new Date().getFullYear()}{' '}
          <a href="https://oliveandgrain.com">
            Olive Grain, All rights reserved.
          </a>
        </div>
        <span className="mx-auto text-xs text-center">
          Website by <strong>Aron Weston</strong>
        </span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
