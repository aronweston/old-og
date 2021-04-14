import styled from 'styled-components';
import tw from 'twin.macro';
import { Link, Button } from '../../Global';

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  > div {
    padding: 8px;

    &:first-child {
      text-align: right;
    }
  }
`;

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
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

export const CartContainer = styled.div`
  overflow: auto;
`;

export const EmptyContainer = styled.div`
  ${tw`py-20`};
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

export const CheckoutFooter = styled.div`
  display: inline-flex;
  gap: 20px;

  ${Link}, ${Button} {
    margin: 0;
  }
`;
