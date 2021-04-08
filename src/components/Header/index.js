import React, { useState } from 'react';
import {
  Header as HeaderWrapper,
  Menu as MenuIcon,
  Container,
  MobileLogo,
  Phone,
  SearchIcon,
  IconContainer,
} from './styles';
import { MiniCart, Cart, Menu, Search } from 'components';

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const showCart = () => {
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  const showMenu = () => {
    !menuVisible ? setMenuVisible(true) : setMenuVisible(false);
  };

  const showSearch = () => {
    !searchVisible ? setSearchVisible(true) : setSearchVisible(false);
  };

  return (
    <>
      <HeaderWrapper search={searchVisible ? true : null}>
        <Container>
          <MobileLogo />
          <IconContainer>
            <Phone />
            <MenuIcon onClick={showMenu} />
            <SearchIcon onClick={showSearch} />
            <Cart onClick={showCart} />
          </IconContainer>
        </Container>
      </HeaderWrapper>

      <MiniCart
        visible={cartVisible}
        crossClick={() => setCartVisible(false)}
      />

      <Menu visible={menuVisible} crossClick={() => setMenuVisible(false)} />

      <Search
        visible={searchVisible}
        crossClick={() => setSearchVisible(false)}
      />
    </>
  );
};

export default Header;
