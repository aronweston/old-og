import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  CartHeader,
  CloseBar,
  NavLink,
  Overlay,
  OverlayContent,
} from './styles';

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          context {
            isCollection
            collectionTitle
          }
          path
        }
      }
    }
  }
`;

export const Menu = ({ visible, crossClick }) => {
  const { allSitePage } = useStaticQuery(query);
  return (
    <Overlay visible={visible ? true : null}>
      <CartHeader>
        <div />
        <CloseBar>
          <span onClick={crossClick}>×</span>
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
          {allSitePage.edges.map(collection =>
            collection.node.context.isCollection === true ? (
              <li key={collection.title}>
                <NavLink to={collection.node.path}>
                  {collection.node.context.collectionTitle}
                </NavLink>
              </li>
            ) : null
          )}
        </ul>
      </OverlayContent>
    </Overlay>
  );
};
