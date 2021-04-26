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
  height: 80px;
  top: 0;
  background: ${props => (props.search ? 'var(--secondary)' : 'transparent')};
`;

export const HeaderContainer = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  padding: 15px;
`;

export const Icon = styled.button`
  //search button
  &:nth-child(3) {
    ${props => props.clicked && clickedStyles}
    }
  }
`;

const clickedStyles = `
  outline: none;
  background: white;
  padding: 13px;
  border-radius: 100px;

  > svg {
    stroke: var(--primary);
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  gap: 0.75em;

  @media (max-width: 425px) {
    > button > a > svg,
    > button > svg,
    > div > button > svg {
      stroke: ${props => (props.location === '/' ? '#fff' : '')};
    }
  }
`;

export const NavLink = styled(Link)`
  display: inline-flex;

  > svg {
    &:hover {
      fill: var(--secondary);
    }

    @media (max-width: 425px) {
      fill: ${props => (props.location === '/' ? '#fff' : '')};
      &:hover {
        fill: ${props => (props.location === '/' ? '#fff' : '')};
      }
    }
  }
`;

export { HeaderLogo, MenuIcon, Phone, SearchIcon, MobileLogo };
