import styled from 'styled-components';
import tw from 'twin.macro';
export const SiteWrapper = tw.div`flex flex-col justify-between`;
export const Main = styled.main`
  width: 100%;
  overflow: hidden;
  margin-top: ${props => (props.homePage ? '0px' : '76px')};
`;
