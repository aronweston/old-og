import React from 'react';
import { CrumbLink } from './styles';
import { useLocation } from '@reach/router';

export const Breadcrumb = ({ cHandle, cTitle, product }) => {
  const { search, pathname } = useLocation();
  return (
    <>
      <CrumbLink to="/deli">The Deli / </CrumbLink>
      <CrumbLink to={`/deli/${cHandle}`}>{cTitle} / </CrumbLink>
      <CrumbLink to={pathname + search}>{product.title}</CrumbLink>
    </>
  );
};
