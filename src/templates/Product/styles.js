import tw from 'twin.macro';
import styled from 'styled-components';

export const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
export const Description = styled.p`
  ${tw`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`}
`;

export const Grid = styled.section`
  ${tw`container mx-auto mt-2`};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

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
