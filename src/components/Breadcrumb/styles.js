import styled from 'styled-components';
import { Link } from 'gatsby';

export const CrumbLink = styled(Link)`
  color: ${props => (props.active ? 'blue' : 'black')};
`;
