import styled from 'styled-components';
import Left from '../../images/platter-left.png';
import Right from '../../images/platter-right.png';

export const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  margin-top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    border: 2px solid black;
    background-color: var(--secondary);
  }
`;

export const BackgroundImage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  > div {
    &:nth-child(1) {
      background: url(${Left});
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
      height: 50vh;
      width: 100%;
      @media (min-width: 768px) {
        height: 100vh;
      }
    }

    &:nth-child(3) {
      background: url(${Right});
      background-position: right;
      background-repeat: no-repeat;
      background-size: contain;
      height: 50vh;
      width: 100%;
      @media (min-width: 768px) {
        height: 100vh;
      }
    }
  }
`;

export const Content = styled.div`
  outline: 2px solid black;
  background: var(--bkg);
  align-self: center;
  justify-self: center;
  z-index: 1;
  text-align: center;
  margin: 1rem;
  margin-top: -500px;
  margin-bottom: -500px;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  > div {
    > * {
      margin: 10px auto;
    }
    > p {
      font-size: 20px;
      line-height: 20px;
      display: block;
      text-align: center;
    }
    > a {
      display: inline-block;
    }
  }
`;
