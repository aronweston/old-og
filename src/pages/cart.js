import React from 'react';
import { SEO, CartContents } from 'components';
import { Container } from '../components/Global/index.js';
const CartPage = () => (
  <>
    <SEO title="Cart" description="Olive & Grain Cart Page" />
    <Container>
      <CartContents />
    </Container>
  </>
);

export default CartPage;
