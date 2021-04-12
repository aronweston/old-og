import React from 'react';
import { Checkbox } from 'components';
import { CategoryFilterWrapper } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

const CategoryFilter = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  let collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);

  const onClick = () => {
    let navTo = `/deli`;

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    navigate(`${navTo}${newIds.length ? '?c=' + newIds.join(',') : ''}`);
  };

  return (
    <CategoryFilterWrapper
      onClick={() => {
        onClick(id);
      }}
    >
      <Checkbox checked={checked} />
      <p>{title}</p>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
