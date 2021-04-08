import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

export const Overlay = styled.div`
  height: 100vh;
  width: 350px;
  position: fixed;
  z-index: 9000;
  left: 0;
  top: 0;
  background-color: var(--primary);
  overflow-x: hidden;
  transition: 0.5s;
  opacity: ${props => (props.visible ? '1' : '0')};
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OverlayContent = styled.nav`
  display: flex;
  width: 100%;
  text-align: left;
  margin-top: 30px;

  > ul {
    > li {
      list-style: none;
    }
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
  padding: 25px;
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

export const CartHeader = styled.div`flex justify-between items-center`;
