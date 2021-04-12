import tw from 'twin.macro';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

export const Container = styled.div`
  ${tw`container mx-auto`}
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const Icon = styled.button`
  > svg {
    &:hover {
      stroke: var(--secondary);
    }
  }
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
