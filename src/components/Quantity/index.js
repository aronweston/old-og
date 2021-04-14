import React, { useState, useContext } from 'react';
import { QuantityWrapper, Button, Input, Message } from './styles';
import CartContext from 'context/CartContext';

export const Quantity = ({ variantId, available }) => {
  const [qty, setQty] = useState(1);
  const { updateLineItem } = useContext(CartContext);
  const [message, setMessage] = useState({});

  const qtyChange = e => {
    setQty(e.currentTarget.value);
  };

  const messageSet = (message, classString) => {
    setMessage({ message: message, class: classString });
    setTimeout(() => {
      setMessage({});
    }, 2000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (qty < 10) {
      updateLineItem({ variantId, quantity: parseInt(qty) });
      messageSet('Added to Cart', 'success');
    } else {
      messageSet('Quantity must be less than 10.', 'fail');
    }
  };

  return (
    <>
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
      <Message class={message.class}>{message && message.message}</Message>
    </>
  );
};
