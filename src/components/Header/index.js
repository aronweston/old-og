import React, { useState } from 'react';
import {
  HeaderWrapper,
  MenuIcon,
  NavLink,
  HeaderContainer,
  MobileLogo,
  Phone,
  Icon,
  SearchIcon,
  IconContainer,
} from './styles';
import { MiniCart, Cart, Menu, Search } from 'components';

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const showCart = () => {
    closeAll();
    !cartVisible ? setCartVisible(true) : setCartVisible(false);
  };

  const showMenu = () => {
    closeAll();
    !menuVisible ? setMenuVisible(true) : setMenuVisible(false);
  };

  const showSearch = () => {
    closeAll();
    !searchVisible ? setSearchVisible(true) : setSearchVisible(false);
    setMenuVisible(false);
    setCartVisible(false);
  };

  const closeAll = () => {
    setSearchVisible(false);
    setMenuVisible(false);
    setCartVisible(false);
  };

  return (
    <HeaderWrapper search={searchVisible ? true : null}>
      <HeaderContainer>
        <NavLink to="/">
          <MobileLogo />
        </NavLink>
        <IconContainer>
          <Icon onClick={closeAll}>
            <NavLink to="/contact">
              <Phone />
            </NavLink>
          </Icon>

          <Icon onClick={showMenu}>
            <MenuIcon />
          </Icon>

          <Icon onClick={showSearch} clicked={!!searchVisible}>
            <SearchIcon />
          </Icon>

          <Cart onClick={showCart} />
        </IconContainer>
      </HeaderContainer>

      <MiniCart
        visible={cartVisible}
        crossClick={() => setCartVisible(false)}
      />

      <Menu visible={menuVisible} crossClick={() => setMenuVisible(false)} />

      <Search
        visible={searchVisible}
        crossClick={() => setSearchVisible(false)}
      />
    </HeaderWrapper>
  );
};

export default Header;
