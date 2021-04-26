import styled from 'styled-components';
import { Container as ContainerBase } from '../Global';

export const SearchWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: -1px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 9000;
  background: var(--secondary);
  transition: 0.2s all;
  > div {
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
  }
`;

export const TitleBlock = styled.div`
  display: inline-flex;
  justify-content: space-between;
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
  font-family: var(--primary-font);
  > span {
    cursor: pointer;
    font-size: 20px;
    padding: 1rem;
    font-weight: bold;
  }
`;
export const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 1rem;
`;

export const HeaderContainer = styled(ContainerBase)``;

export const ScrollContainer = styled(ContainerBase)`
  max-height: 100vh;
  overflow: auto;
  padding-bottom: 100px;
`;
