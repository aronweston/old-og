import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
  text-align: left;
  line-height: auto;
  margin: 0;

  > * {
    padding: 5px;
  }

  > strong {
    font-size: 20px;
    margin-bottom: 20px;
  }
  > li {
    list-style: none;
    > a {
      transition: 0.2s color;
      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

const FooterList = ({ title, isCollection, data }) => {
  return (
    <List>
      <strong>{title}</strong>
      {data?.map(link => (
        <li key={link.shopifyId || link.product.shopifyId}>
          {isCollection ? (
            <Link to={`/deli/${link.handle}`}>{link.title}</Link>
          ) : (
            <Link
              to={
                link.handle ||
                `/deli/${link.collection.handle}/${link.product.handle}`
              }
            >
              {link.title || link.product.title}
            </Link>
          )}
        </li>
      ))}
    </List>
  );
};

export default FooterList;
