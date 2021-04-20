import styled from 'styled-components';
import { Link as LinkBase } from 'gatsby';

export const Heading = styled.h1`
  font-weight: bold;
  margin: 20px 0px 10px 0px;
`;

export const Description = styled.p`
  margin-top: 10px;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 80px;

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

  > select {
    width: 100%;
    padding: 10px;
  }
`;

export const Price = styled.div`
  margin: 25px 0;
  font-weight: bold;
  font-size: 30px;
`;

export const Link = styled(LinkBase)`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`;
