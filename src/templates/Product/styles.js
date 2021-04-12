import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: bold;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    > div:first-child {
      order: 2;
    }
    > div:last-child {
      order: 1;
    }
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }
`;

export const Price = styled.div`
  margin: 40px 0;
  font-weight: bold;
  font-size: 30px;
`;

export const Button = styled.button`
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
