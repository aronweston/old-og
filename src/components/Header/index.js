import React, { useState } from 'react';
import {
  Header as HeaderWrapper,
  Menu as MenuIcon,
  Container,
  Icon,
  NavLink,
  HeaderLogo,
  Phone,
  IconContainer,
} from './styles';
import { MiniCart, Cart, Menu } from 'components';

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  const showMenu = () => {
    !menuVisible ? setMenuVisible(true) : setMenuVisible(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Icon onClick={showMenu}>
            <MenuIcon width="25px" fill="#000" />
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

      <Menu visible={menuVisible} crossClick={() => setMenuVisible(false)} />
    </>
  );
};

export default Header;
