import styled from 'styled-components';

export const CollectionGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 50px;

  @media (max-width: 765px) {
    padding: 0;
  }
`;
