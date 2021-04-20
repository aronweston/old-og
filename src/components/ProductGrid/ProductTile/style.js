import styled from 'styled-components';
import { Link } from '../../Global';

export const TileWrapper = styled.div`
  border: 1px solid #ddd;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  background: ${props => (props.isSearch ? '#fff' : '')};

  > *:not(:first-child) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  font-family: var(--font-primary);
  text-transform: uppercase;
`;

export const Price = styled.p`
  font-style: italic;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Button = styled(Link)`
  padding: 12px;
`;
