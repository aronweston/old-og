import React from 'react';
import { Checkbox } from 'components';
import { CategoryFilterWrapper } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

const CategoryFilter = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  let collectionIds = qs.c?.split(',').filter(c => !!c);

  const onClick = () => {
    let navTo = `/deli`;
    console.log(collectionIds);
    collectionIds.push(id);

    const newIds = collectionIds.map(cId => encodeURIComponent(cId));

    navigate(`${navTo}?c=${newIds.join(',')}`);
  };

  return (
    <CategoryFilterWrapper onClick={onClick}>
      {/* <Checkbox checked={collectionIds.find(cId => cId === id)} /> */}
      <p>{title}</p>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
