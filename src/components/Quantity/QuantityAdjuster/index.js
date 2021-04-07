import React from 'react';
import { QtyWrapper, AdjustButton } from './styles';

export const QtyAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;
  const handleDecQty = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  const handleIncQty = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QtyWrapper>
      <AdjustButton onClick={handleDecQty}>-</AdjustButton>
      <div>{quantity}</div>
      <AdjustButton onClick={handleIncQty}>+</AdjustButton>
    </QtyWrapper>
  );
};
