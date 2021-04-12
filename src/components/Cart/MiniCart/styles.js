import tw from 'twin.macro';
import styled from 'styled-components';
import EmptyCartIcon from '../../../assets/svg/empty-leaf.svg';
import { Button as ButtonBase } from '../../Global';
export { EmptyCartIcon };

export const MiniCartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  opacity: ${props => (props.visible ? '1' : '0')};
  z-index: 9000;
  height: 100vh;
  width: 350px;
  background-color: var(--bkg);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CartContainer = styled.div`
  overflow: auto;
  height: calc(100% - 253px);
`;

export const CartItem = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }

  //Desktop
  @media screen and (min-width: 1024px) {
    padding: 15px 0px;
  }

  > img {
    width: 100%;
    ${tw`rounded`}
    @media screen and (min-width: 768px) {
      width: 90%;
      margin-right: auto;
    }
  }

  > div {
    > p:first-child {
      font-size: 20px;
      font-family: 'Abril Fatface';
      font-weight: bold;
    }

    > p:last-child {
      font-size: 17px;
      margin: 10px 0;
      font-family: 'Abril Fatface';
      font-weight: bold;
    }
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 15px;
  position: absolute;
  bottom: 0;

  > div {
    display: inline-flex;
    justify-content: space-between;
    font-size: 18px;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%);
  }
  //Desktop
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const Button = styled(ButtonBase)`
  margin-top: 5px;
  margin-right: 0;
  padding: 0.8rem 2rem;
  &:hover {
    transform: none;
  }
`;

export const CartHeader = styled.div`flex justify-between items-center`;

export const EmptyCart = styled.div`
  height: 70vh;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 35px;
    font-family: 'Abril Fatface';
    color: black;
    padding-top: 25px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;
    width: 70%;
  }

  @media (min-width: 768px) {
    > p {
      width: 30%;
    }
  }

  @media (min-width: 1024px) {
    > p {
      width: 60%;
    }
  }
`;

export const CloseBar = styled.div`
  padding: 25px;
  position: relative;
  line-height: 1;
  z-index: 11;
  font-size: 40px;
  color: black;
  cursor: pointer;
  text-align: left;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;
