import tw from 'twin.macro';
import styled from 'styled-components';
import EmptyCartIcon from '../../../assets/svg/empty-leaf.svg';

export { EmptyCartIcon };

export const ButtonBase = styled.button`
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

export const CartHeader = tw.div`flex justify-between items-center`;
export const Button = styled(ButtonBase)`
  width: 100%;
  margin-top: 5px;
  &:hover {
    transform: none;
  }
`;
export const SubTotal = tw.p``;
export const Cross = tw.span``;
export const Item = tw.div`mt-2 flex justify-between`;
export const Image = tw.img`w-4/12`;
export const Qty = tw.p`text-black`;
export const Title = tw.p`text-black`;
export const Info = tw.div`w-8/12`;
export const FullCart = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`;
export const EmptyCart = tw.div`flex items-center flex-col text-center h-full justify-center w-full`;
export const CartContents = tw.div`p-1 mx-auto m-4`;
export const CheckOutBlock = tw.div`absolute bottom-0 m-4 w-full`;

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

export const MiniCartContainer = styled.div`
  position: fixed;
  text-align: left;
  right: 0;
  line-height: 1.4;
  top: 0;
  opacity: ${props => (props.visible ? '1' : '0')};
  z-index: 9000;
  height: 100vh;
  width: 350px;
  opacity: ${props => (props.visible ? '1' : '0')};
  background-color: ${props =>
    props.visible === true ? '#f5f5f5' : '#f5f5f5'};
  -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.06);
  -webkit-transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(100%)'};
  -ms-transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(100%)'};
  transform: ${props =>
    props.visible ? 'translateX(0%)' : 'translateX(100%)'};

  // transitions
  -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;
  -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    visibility 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
