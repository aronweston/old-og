import styled from 'styled-components';
import EmptyCartIcon from '../../../assets/svg/empty-leaf.svg';
import { Button as ButtonBase, Link as LinkBase } from '../../Global';
export { EmptyCartIcon };

export const MiniCartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9000;
  height: 100vh;
  width: 350px;
  background-color: var(--bkg);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  ${props => (props.visible === true ? visible : notVisible)};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const visible = `
transform: translateX(0%);
transition: transform 0.5s;
opacity: 1;
`;

const notVisible = `
opacity: 0;
transform: translateX(100%);
transition: transform 0.5s, opacity 5s ease-out;
`;

export const CartContainer = styled.div`
  overflow: auto;
  height: calc(100% - 220px);
`;

export const CartItem = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: left;

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
    border-radius: 0.25rem;
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

const buttonStyles = `
margin: 0;
  margin-top: 5px;
  margin-right: 0;
  padding: 0.8rem 2rem;
  &:hover {
    transform: none;
  }

`;

export const Button = styled(ButtonBase)`
  ${buttonStyles}
`;

export const Link = styled(LinkBase)`
  ${buttonStyles}
`;

export const CartHeader = styled.div``;

export const EmptyCart = styled.div`
  height: 70vh;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > * {
    padding-bottom: 10px;
  }

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
    @media (min-width: 1024px) {
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
