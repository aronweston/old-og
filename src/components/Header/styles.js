import tw from 'twin.macro';
import { Link } from 'gatsby';
import styled from 'styled-components';

import HeaderLogo from '../../assets/svg/header-logo.svg';
import Menu from '../../assets/svg/menu.svg';
import Phone from '../../assets/svg/phone.svg';
import SearchIcon from '../../assets/svg/search.svg';
import MobileLogo from '../../assets/svg/mobile-logo.svg';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  height: 85px;
  top: 0;
  background: ${props => (props.search ? 'var(--secondary)' : 'transparent')};
`;

// export const Container = styled.div`
// margin: 0 auto;
// display: flex;
// `

export const Container = tw.div`container mx-auto flex justify-between justify-items-stretch py-4`;
export const IconContainer = tw.div`inline-flex gap-3`;
export const NavLink = tw(Link)`inline-flex`;

export { HeaderLogo, Menu, Phone, SearchIcon, MobileLogo };
