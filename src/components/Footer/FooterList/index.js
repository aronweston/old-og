import React from 'react';
import { Link } from 'gatsby';

const FooterList = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/terms">T&C's</Link>
      </li>
      <li>
        <Link to="/privacy">Privacy Policy</Link>
      </li>
    </ul>
  );
};

export default FooterList;
