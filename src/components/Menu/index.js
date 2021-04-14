import React, { useContext } from 'react';
import {
  CartHeader,
  CloseBar,
  NavLink,
  NavList,
  SideMenuContainer,
  MenuContent,
} from './styles';
import ProductContext from 'context/ProductContext';
import CategoryMenu from './CategoryMenu';

export const Menu = ({ visible, crossClick }) => {
  const { collections } = useContext(ProductContext);
  return (
    <SideMenuContainer visible={visible ? true : null}>
      <CartHeader>
        <div />
        <CloseBar>
          <button onClick={crossClick}>×</button>
        </CloseBar>
      </CartHeader>
      <MenuContent>
        <NavList onClick={crossClick}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/deli">The Deli</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </NavList>
        <CategoryMenu collections={collections} exit={crossClick} />
      </MenuContent>
    </SideMenuContainer>
  );
};
