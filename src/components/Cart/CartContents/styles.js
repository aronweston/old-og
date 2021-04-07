import styled from 'styled-components';
import tw from 'twin.macro';

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
  margin: 0 auto;
  padding: 1rem;
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

export const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: ${props =>
    props.primary
      ? 'var(--primary)'
      : props.secondary
      ? 'var(--secondary)'
      : 'transparent'};
  border: ${props =>
    props.secondary
      ? '1px var(--secondary) solid'
      : '1.5px var(--primary) solid'};
  color: ${props =>
    props.primary || props.secondary ? '#fff' : 'var(--primary)'};
  text-align: center;
  font-size: 18px;
  font-family: var(--font-secondary);
  font-style: italic;
  font-weight: 600;
  padding: 1rem 2rem;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.14);
    transform: translate(0%, -7%);
  }
`;
