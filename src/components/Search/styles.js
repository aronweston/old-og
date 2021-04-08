import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: fixed;
  height: 65%;
  padding: 15px;
  margin-top: 85px;
  width: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')};
  overflow: hidden;
  flex-direction: column;
  z-index: 90000;
  background: var(--secondary);
  transition: 0.2s all;

  > div {
    display: inline-flex;
    justify-content: space-between;
    color: white;
    > span {
      cursor: pointer;
      font-size: 20px;
      padding: 1rem;
      font-weight: bold;
    }
  }
`;
