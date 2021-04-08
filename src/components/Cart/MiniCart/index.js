import React, { useContext } from 'react';
import Image from 'gatsby-image';
import {
  Button,
  CartHeader,
  CloseBar,
  EmptyCart,
  EmptyCartIcon,
  MiniCartContainer,
  ButtonBlock,
  CartContainer,
  CartItem,
} from './styles';
import CartContext from 'context/CartContext';

export const MiniCart = ({ visible, crossClick }) => {
  const { checkout } = useContext(CartContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  const CartHeaderContainer = () => {
    return (
      <CartHeader>
        <div />
        <CloseBar>
          <span onClick={crossClick}>×</span>
        </CloseBar>
      </CartHeader>
    );
  };

  if (checkout) {
    if (checkout.lineItems.length > 0) {
      return (
        <MiniCartContainer visible={visible ? true : null}>
          <CartHeaderContainer />
          <CartContainer>
            {checkout.lineItems &&
              checkout.lineItems.map(item => (
                <CartItem key={item.id}>
                  <img src={item.variant.image?.src} />
                  <div>
                    <p>{item.title}</p>
                    <p>
                      Platters
                      {item.variant.title === 'Default Title'
                        ? ''
                        : ' / ' + item.variant.title}
                    </p>
                    <p></p>
                    <p>Qty: {item.quantity}</p>
                    <p>${item.quantity * item.variant.price}</p>
                  </div>
                </CartItem>
              ))}
          </CartContainer>
          <ButtonBlock>
            <div>
              <strong>Subtotal</strong>
              <p>
                $
                {new Intl.NumberFormat({
                  style: 'currency',
                }).format(checkout.subtotalPrice)}
              </p>
            </div>
            <Button onClick={handleCheckout}>Cart</Button>
            <Button onClick={handleCheckout}>Checkout</Button>
          </ButtonBlock>
        </MiniCartContainer>
      );
    } else {
      return (
        <MiniCartContainer visible={visible ? true : null}>
          <CartHeaderContainer />
          <EmptyCart>
            <EmptyCartIcon />
            <span>Cart is empty!</span>
            <p>
              View all of our amazing platters, cakes, quiches and more through
              our online deli!
            </p>
          </EmptyCart>
        </MiniCartContainer>
      );
    }
  } else {
    return 'loading';
  }
};
