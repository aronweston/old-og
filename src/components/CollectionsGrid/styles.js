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

export const CollectionImage = styled.div`
  height: 300px;
  max-height: 100vh;
  flex: 1 1 40%;
  background-image: ${props => props.image && `url('${props.image}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &:first-child {
    flex: 1 1 100%;
    margin-bottom: 5px;
  }

  &:nth-child(even) {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  &:last-child {
    flex: 1 1 100%;
    margin: 0;
  }

  &:after {
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin: 0;
    margin-bottom: 5px;
    &:nth-child(even) {
      margin-right: 0px;
    }
  }
`;

export const TileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  flex-direction: column;
  border-radius: 4px;
`;

export const Title = styled.h3`
  padding: 5px 10px;
  margin-bottom: 1rem;
  display: block;
  font-size: 3rem;
  color: white;
  border-radius: 10px;
  font-family: var(--font-primary);
  font-weight: bolder;
`;
