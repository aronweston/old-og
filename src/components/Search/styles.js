import styled from 'styled-components';

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

export const SearchContainer = styled.div`
  position: fixed;
  height: 100%;
  padding: 0px 15px;
  margin-top: 85px;
  width: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  overflow: hidden;
  flex-direction: column;
  z-index: 90000;
  background: var(--secondary);
  transition: 0.2s all;
`;

export const ProductContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 100px;
`;
