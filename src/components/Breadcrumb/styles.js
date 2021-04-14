import styled from 'styled-components';
import { Link } from 'gatsby';

export const CrumbLink = styled(Link)`
  &:active {
    color: var(--secondary);
  }

  &:hover {
    color: var(--secondary);
    transition: color 2s;
  }
`;
