import React, { useContext } from 'react';
import {
  CartHeader,
  CloseBar,
  EmptyCart,
  EmptyCartIcon,
  MiniCartContainer,
  ButtonBlock,
  CartContainer,
  CartItem,
  Button,
  Link,
} from './styles';
import CartContext from 'context/CartContext';

export const MiniCart = ({ visible, crossClick }) => {
  const { checkout, removeLineItem } = useContext(CartContext);

  const CartHeaderContainer = () => {
    return (
      <CartHeader>
        <div />
        <CloseBar>
          <button onClick={crossClick}>×</button>
        </CloseBar>
      </CartHeader>
    );
  };

  if (checkout) {
    if (checkout?.lineItems.length > 0) {
      return (
        <MiniCartContainer visible={visible ? true : null}>
          <CartHeaderContainer />
          <CartContainer>
            {checkout?.lineItems.map(item => (
              <CartItem key={item.id}>
                <img src={item.variant.image?.src} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>
                    {item.variant.selectedOptions[0].name}:{' '}
                    {item.variant.title === 'Default Title'
                      ? ''
                      : item.variant.title}
                  </p>

                  <button
                    onClick={() => {
                      removeLineItem(item.id);
                    }}
                  >
                    Remove
                  </button>
                  <p>Qty: {item.quantity}</p>
                  <p>${(item.quantity * item.variant.price).toFixed(2)}</p>
                </div>
              </CartItem>
            ))}
          </CartContainer>
          <ButtonBlock>
            <div>
              <strong>Subtotal</strong>
              <p>${Number(checkout.subtotalPrice).toFixed(2)}</p>
            </div>
            <div>
              <strong>GST (approx.)</strong>
              <p>${Number(checkout.subtotalPrice / 10).toFixed(2)}</p>
            </div>
            <Link onClick={crossClick} to="/cart">
              Cart
            </Link>
            <Button
              secondary
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
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
            <Link onClick={crossClick} to="/deli">
              Shop Now
            </Link>
          </EmptyCart>
        </MiniCartContainer>
      );
    }
  } else {
    return '';
  }
};
