import React, { useState, useContext } from 'react';
import { QuantityWrapper, Button, Input } from './styles';
import CartContext from 'context/CartContext';

export const Quantity = ({ variantId, available }) => {
  const [qty, setQty] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const qtyChange = e => {
    setQty(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(variantId, qty);
    updateLineItem({ variantId, quantity: parseInt(qty) });
  };

  return (
    <QuantityWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={qty}
          onChange={qtyChange}
        />
        <Button type="submit" disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
    </QuantityWrapper>
  );
};
