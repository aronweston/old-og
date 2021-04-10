import styled from 'styled-components';
import { Link } from 'gatsby';

export const TileWrapper = styled.div`
  border: 1px solid #ddd;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.p`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.p`
  font-style: italic,
  margin-top: auto;
  font-weight: bold;
  padding: 20px;
`;

export const Button = styled(Link)`
  border: 1px solid black;
  text-decoration: none;
  display: block;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  &:hover {
    background: var(--secondary);
    color: white;
  }
`;
