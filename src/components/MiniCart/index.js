import React, { useContext } from 'react';
// import StoreContext from '~/context/StoreContext';

const MiniCart = ({ visible, qty, crossClick }) => {
  //   const {
  //     store: { checkout },
  //   } = useContext(StoreContext);

  //   const handleCheckout = () => {
  //     window.open(checkout.webUrl);
  //   };

  return (
    <MiniCartContainer visible={visible ? true : null}>
      <CartHeader>
        <Title>Review Cart</Title>
        <CloseBar>
          <Cross onClick={crossClick}>×</Cross>
        </CloseBar>
      </CartHeader>
      {checkout.lineItems.length > 0 ? (
        <FullCart>
          <CartContents>
            {checkout.lineItems &&
              checkout.lineItems.map(item => (
                <Item key={item.id}>
                  <Image src={item.variant.image && item.variant.image.src} />
                  <Info>
                    <Title>{item.title}</Title>
                    <Qty>
                      {item.quantity} x ${item.variant.price}
                    </Qty>
                  </Info>
                </Item>
              ))}
          </CartContents>
          <CheckOutBlock>
            <SubTotal>Total Items: {qty}</SubTotal>
            <SubTotal>Subtotal: ${checkout.subtotalPrice}</SubTotal>
            <Button onClick={handleCheckout}>Checkout</Button>
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

export default MiniCart;
