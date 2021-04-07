import React, { useContext } from 'react';
import { CartContainer, CartCounter, CartIcon } from './styles';
import CartContext from 'context/CartContext';

const useQuantity = () => {
  const { checkout } = useContext(CartContext);
  const items = checkout ? checkout.lineItems : [];
  const total = items.reduce((acc, item) => acc + item.quantity, 0);
  return [total !== 0, total];
};

export const Cart = ({ onClick }) => {
  // const hasItems = true;
  // const quantity = 10;
  const [hasItems, quantity] = useQuantity();

  return (
    <CartContainer onClick={onClick}>
      <CartIcon stroke="#fff" width="25px" />
      {hasItems && <CartCounter>{quantity}</CartCounter>}
    </CartContainer>
  );
};
