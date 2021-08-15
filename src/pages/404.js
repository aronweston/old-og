import React from 'react';
import styled from 'styled-components';
import { SEO } from 'components';
import { Link } from '../components/Global/styles';

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  height: 100%;
  margin: 2rem 0rem;
`;

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" description="Not found page 404" />
      <NotFoundContainer>
        <h1>Page Not Found</h1>
        <p>
          Unfortunately the content you’re looking for isn’t here. There may be
          a misspelling in your web address or you may have clicked a link for
          content that no longer exists.
        </p>
        <ButtonBlock>
          <Link to="/">Home</Link>
          <Link to="/deli">Go to Deli</Link>
        </ButtonBlock>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
