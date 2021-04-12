import styled from 'styled-components';
import tw from 'twin.macro';

export const SubHeaderWrapper = styled.div`
  ${tw`mx-auto py-3`}
  display: flex;
  background-color: var(--primary);
  color: white;
  justify-content: center;
  > p {
    text-align: center;
  }
`;
