import React, { useContext } from 'react';
import CartContext from 'context/CartContext';

export const RemoveLineItem = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <div>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};
