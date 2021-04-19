import styled from 'styled-components';
import { Link } from 'gatsby';

import ChevronDown from '../../../assets/svg/chevron-down.svg';

export const NavLink = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
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

export const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-primary);
  font-size: 36px;
  line-height: 36px;

  > a > strong {
    color: white;
    padding: 8px;
  }
`;

export const CollectionList = styled.ul`
  margin: 0;
  margin-bottom: 20px;
  > li {
    list-style: none;
  }
`;

export { ChevronDown };
