import tw from 'twin.macro';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container as ContainerBase } from '../Global';

import HeaderLogo from '../../assets/svg/header-logo.svg';
import MenuIcon from '../../assets/svg/menu.svg';
import Phone from '../../assets/svg/phone.svg';
import SearchIcon from '../../assets/svg/search.svg';
import MobileLogo from '../../assets/svg/mobile-logo.svg';

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 85px;
  top: 0;
  background: ${props => (props.search ? 'var(--secondary)' : 'transparent')};
`;

export const HeaderContainer = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  padding-top: 1em;
  padding-bottom: 1em;
  padding: 15px;
`;

export const Icon = styled.button`
  > svg {
    &:hover {
      stroke: var(--secondary);
    }
  }

  &:focus {
    outline: none;
  }

  &:nth-child(3) {
    ${props => props.clicked && Clicked}
    }
  }
`;

const Clicked = `
  outline: none;
  background: white;
  padding: 13px;
  border-radius: 100px;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  gap: 0.75em;
`;

export const NavLink = styled(Link)`
  display: inline-flex;

  > svg {
    &:hover {
      fill: var(--secondary);
    }
  }
`;

export { HeaderLogo, MenuIcon, Phone, SearchIcon, MobileLogo };
