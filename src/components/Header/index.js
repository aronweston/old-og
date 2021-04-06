import React, { useState } from 'react';
import {
  Header as HeaderWrapper,
  Menu,
  Container,
  Icon,
  NavLink,
  HeaderLogo,
  Phone,
  Cart,
  CartIcon,
  IconContainer,
  CartCounter,
} from './styles';

// import MiniCart from 'components';

const Header = () => {
  const hasItems = true;
  const quantity = 10;
  const [miniCart, setMiniCart] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const showCart = () => {
    !miniCart ? setMiniCart(true) : setMiniCart(false);
  };

  const showNavMenu = () => {
    !navMenu ? setNavMenu(true) : setNavMenu(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Icon onClick={() => showNavMenu()}>
            <Menu width="25px" fill="#000" />
          </Icon>

          <NavLink to="/">
            <HeaderLogo width="200px" />
          </NavLink>

          <IconContainer>
            <NavLink to="tel:0422611910">
              <Phone width="25px" />
            </NavLink>

            <Cart
              onClick={() => {
                showCart();
              }}
            >
              <CartIcon stroke="#fff" width="25px" />
              {hasItems && <CartCounter>{quantity}</CartCounter>}
            </Cart>
          </IconContainer>
        </Container>
      </HeaderWrapper>

      {/* <MiniCart
        qty={quantity}
        visible={miniCart}
        crossClick={() => setMiniCart(false)}
      /> */}
    </>
  );
};

export default Header;
