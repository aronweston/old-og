import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

export const CollectionImage = styled(BackgroundImage)`
  height: 300px;
  max-height: 100vh;
  flex: 1 1 40%;

  &:first-child {
    flex: 1 1 100%;
    margin-bottom: 5px;
  }

  &:nth-child(even) {
    margin-right: 5px;
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
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  flex-direction: column;
  border-radius: 4px;
`;

export const Title = styled.p`
  padding: 5px 10px;
  margin-bottom: 5px;
  display: block;
  font-size: 40px;
  color: white;
  border-radius: 10px;
  font-family: var(--font-primary);
`;
