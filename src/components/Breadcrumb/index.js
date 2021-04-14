import React from 'react';
import { CrumbLink } from './styles';
import { useLocation } from '@reach/router';

export const Breadcrumb = ({ cHandle, cTitle, product }) => {
  const { search, origin, pathname } = useLocation();
  return (
    <>
      <CrumbLink href="/deli">The Deli / </CrumbLink>
      <CrumbLink href={`/deli/${cHandle}`}>{cTitle} / </CrumbLink>
      <CrumbLink active href={pathname + search}>
        {product.title}
      </CrumbLink>
    </>
  );
};
