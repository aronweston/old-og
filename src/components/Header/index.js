import React, { useState } from 'react';
import {
  HeaderWrapper,
  MenuIcon,
  NavLink,
  Container,
  MobileLogo,
  Phone,
  Icon,
  SearchIcon,
  IconContainer,
} from './styles';
import { MiniCart, Cart, Menu, Search, SubHeader } from 'components';

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
        {/* <SubHeader /> */}
        <Container>
          <NavLink to="/">
            <MobileLogo />
          </NavLink>
          <IconContainer>
            <Icon>
              <Phone />
            </Icon>

            <Icon onClick={showMenu}>
              <MenuIcon />
            </Icon>

            <Icon onClick={showSearch}>
              <SearchIcon />
            </Icon>

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
