import React, { useContext } from 'react';
import { CartContainer, CartIcon } from './styles';
import CartContext from 'context/CartContext';
import { Icon } from '../Header/styles';

export const Cart = ({ onClick }) => {
  const { checkout } = useContext(CartContext);

  const useQuantity = () => {
    const items = checkout ? checkout.lineItems : [];
    const total = items.reduce((acc, item) => acc + item.quantity, 0);
    return [total !== 0, total];
  };
  const [hasItems, quantity] = useQuantity();

  return (
    <CartContainer onClick={onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      {hasItems && <span>{quantity}</span>}
    </CartContainer>
  );
};
