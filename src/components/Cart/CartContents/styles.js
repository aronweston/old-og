import styled from 'styled-components';
import { Link, Button } from '../../Global';

export const CartContainer = styled.div`
  overflow: auto;
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  border-bottom: 1px solid black;
  font-weight: bold;

  > div {
    padding: 8px;
  }
`;

export const CartItem = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  overflow-x: scroll;
  > div {
    padding: 8px;
    &:first-child {
      > div:first-child {
        font-weight: bold;
      }
      > div:last-child {
        color: #999;
        margin-top: 4px;
        font-size: 14px;
      }
    }
  }
`;

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 5fr 1fr 1fr;
  }

  > div {
    padding: 8px;

    &:first-child {
      text-align: right;
    }
  }
`;

export const CheckoutFooter = styled.div`
  display: flex;
  gap: 20px;

  @media (min-width: 768px) {
    display: inline-flex;
  }

  ${Link}, ${Button} {
    margin: 0;

    @media (max-width: 425px) {
      padding: 0.85rem;
      margin-top: 20px;
      width: 100%;
    }
  }
`;

export const EmptyContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-size: 16px;
    font-weight: 300;
    width: 50%;
    line-height: 30px;
  }

  @media (min-width: 768px) {
    > p {
      width: 30%;
    }
  }
`;
