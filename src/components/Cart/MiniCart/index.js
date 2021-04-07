import React, { useContext } from 'react';
import Image from 'gatsby-image';
import {
  Button,
  CartHeader,
  CheckOutBlock,
  CloseBar,
  Cross,
  EmptyCart,
  EmptyCartIcon,
  FullCart,
  Info,
  Item,
  MiniCartContainer,
  Qty,
  SubTotal,
  Title,
} from './styles';
import CartContext from 'context/CartContext';

export const MiniCart = ({ visible, crossClick }) => {
  const { checkout } = useContext(CartContext);

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <MiniCartContainer visible={visible ? true : null}>
      <CartHeader>
        <Title>Review Cart</Title>
        <CloseBar>
          <Cross onClick={crossClick}>×</Cross>
        </CloseBar>
      </CartHeader>
      {checkout?.lineItems.length > 0 ? (
        <FullCart>
          {checkout.lineItems &&
            checkout.lineItems.map(item => (
              <Item key={item.id}>
                <img src={item.variant.image?.src} width="150px" />
                <Info>
                  <Title>{item.title}</Title>
                  <Qty>
                    {item.quantity} x ${item.variant.price}
                  </Qty>
                </Info>
              </Item>
            ))}

          <CheckOutBlock>
            {/* <SubTotal>Total Items: {quantity}</SubTotal> */}
            <SubTotal>Subtotal: ${checkout.subtotalPrice}</SubTotal>
            <a href="/cart">
              <button>Cart</button>
            </a>
            <Button secondary onClick={handleCheckout}>
              Checkout
            </Button>
          </CheckOutBlock>
        </FullCart>
      ) : (
        <EmptyCart>
          <span>Cart is empty!</span>
          <EmptyCartIcon />
          <p>
            View all of our amazing platters, cakes, quiches and more through
            our online deli!
          </p>
        </EmptyCart>
      )}
    </MiniCartContainer>
  );
};
