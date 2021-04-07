import tw from 'twin.macro';
import styled from 'styled-components';

export const Button = styled.button`
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

export const Container = styled.div`
  ${tw`container mx-auto`}
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    > div:first-child {
      order: 2;
    }
    > div:last-child {
      order: 1;
    }
  }
`;
