import React, { useContext } from 'react';
import {
  Button,
  CartFooter,
  CartHeader,
  CartItem,
  CartContainer,
  EmptyContainer,
} from './styles';
import CartContext from 'context/CartContext';
import { EmptyCartIcon } from '../MiniCart/styles';
import { QtyAdjuster } from '../../Quantity/QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);
  console.log(checkout);

  const getPrice = price => {
    return new Intl.NumberFormat({
      style: 'currency',
    }).format(price);
  };

  const handleAdjustQty = ({ quantity, variantId }) => {
    updateLineItem({ variantId, quantity: parseInt(quantity) });
  };

  if (checkout?.lineItems.length > 0) {
    return (
      <CartContainer>
        <h1>Cart</h1>
        <CartHeader>
          <div>Product</div>
          <div>Unit Price ($)</div>
          <div>Quantity</div>
          <div>Total</div>
        </CartHeader>
        {checkout?.lineItems.map(item => (
          <CartItem key={item.variant.id}>
            <div>
              <strong>{item.title}</strong>
              <div>
                {item.variant.title === 'Default Title'
                  ? ''
                  : item.variant.title}
              </div>
            </div>
            <div>
              <strong>${getPrice(item.variant.price)}</strong>
            </div>
            <div>
              <QtyAdjuster item={item} onAdjust={handleAdjustQty} />
            </div>
            <div>
              <strong>
                ${getPrice((item.quantity * item.variant.price).toFixed(2))}
              </strong>
            </div>
            <RemoveLineItem lineItemId={item.id} />
          </CartItem>
        ))}
        <CartFooter>
          <div>
            <strong>Total: </strong>
          </div>
          <div>
            <span>${getPrice(checkout.totalPrice)}</span>
          </div>
        </CartFooter>
      </CartContainer>
    );
  } else {
    return (
      <section>
        <EmptyContainer>
          <EmptyCartIcon />
          <h1>Cart is empty!</h1>
          <p>
            View all of our amazing platters, cakes, quiches and more through
            our online deli!
          </p>
          <a href="/deli">{/* <Button primary>Shop</Button> */}</a>
        </EmptyContainer>
      </section>
    );
  }
};
