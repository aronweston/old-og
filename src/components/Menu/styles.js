import styled from 'styled-components';
import { Link } from 'gatsby';

export const SideMenuContainer = styled.div`
  height: 100vh;
  width: 350px;
  position: fixed;
  z-index: 9000;
  left: 0;
  top: 0;
  background-color: var(--primary);
  overflow-x: hidden;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  ${props => (props.visible === true ? visible : notVisible)};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const visible = `
transform: translateX(0%);
transition: transform 0.5s;
opacity: 1;
`;

const notVisible = `
opacity: 0;
transform: translateX(-100%);
transition: transform 0.5s, opacity 5s ease-out;
`;

export const MenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  padding: 15px;
`;

export const NavList = styled.ul`
  margin: 0px;
  > li {
    list-style: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #fff;
  font-family: 'Abril Fatface';
  display: inline-block;
  transition: 0.3s;

  &:hover {
    color: var(--secondary);
  }

  &:focus {
    color: #f1f1f1;
  }

  @media screen and (max-height: 450px) {
    font-size: 20px;
  }
`;

export const CloseBar = styled.div`
  padding: 0px 25px;
  padding-top: 10px;
  position: relative;
  line-height: 1;
  z-index: 11;
  font-size: 40px;
  color: white;
  cursor: pointer;
  text-align: right;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const CartHeader = styled.div``;
