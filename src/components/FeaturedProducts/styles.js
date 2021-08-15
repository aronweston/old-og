import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
  padding: 50px 0;
  @media (max-width: 768px) {
    padding-top: 0px;
  }

  span {
    padding: 5px 10px;
    margin-bottom: 1rem;
    display: block;
    font-size: 3rem;
    border-radius: 10px;
    font-family: var(--font-primary);
    font-weight: bolder;
  }
`;
