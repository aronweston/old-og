import React, { useContext } from 'react';
import {
  CartHeader,
  CloseBar,
  NavLink,
  Overlay,
  OverlayContent,
} from './styles';
import ProductContext from 'context/ProductContext';

export const Menu = ({ visible, crossClick }) => {
  const { collections } = useContext(ProductContext);
  return (
    <Overlay visible={visible ? true : null}>
      <CartHeader>
        <div />
        <CloseBar>
          <button onClick={crossClick}>×</button>
        </CloseBar>
      </CartHeader>
      <OverlayContent>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/deli">The Deli</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          {collections.map(collection => (
            <li key={collection.shopifyId}>
              <NavLink to={`/deli/${collection.handle}/`}>
                {collection.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </OverlayContent>
    </Overlay>
  );
};
