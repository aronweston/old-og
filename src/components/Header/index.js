import React, { useState } from 'react';
import {
  Header as HeaderWrapper,
  Menu,
  Container,
  Icon,
  NavLink,
  HeaderLogo,
  Phone,
  IconContainer,
} from './styles';
import { MiniCart, Cart } from 'components';

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  // const showNavMenu = () => {
  //   !navMenu ? setNavMenu(true) : setNavMenu(false);
  // };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Icon>
            <Menu width="25px" fill="#000" />
          </Icon>

          <NavLink to="/">
            <HeaderLogo width="auto" />
          </NavLink>

          <IconContainer>
            <NavLink to="tel:0422611910">
              <Phone width="25px" />
            </NavLink>

            <Cart onClick={showCart} />
          </IconContainer>
        </Container>
      </HeaderWrapper>

      <MiniCart
        visible={cartVisible}
        crossClick={() => setCartVisible(false)}
      />
    </>
  );
};

export default Header;
