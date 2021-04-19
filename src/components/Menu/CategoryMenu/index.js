import React from 'react';
import {
  //   ChevronDown,
  CollectionHeader,
  CollectionList,
  NavLink,
} from './styles';
import { Link } from 'gatsby';

const CategoryMenu = ({ collections, exit }) => {
  return (
    <>
      {collections.map(collection => (
        <CollectionList key={collection.shopifyId}>
          <CollectionHeader>
            <Link to={`/deli/${collection.handle}`}>
              <strong onClick={() => exit()}>{collection.title}</strong>
            </Link>
          </CollectionHeader>
          {collection.products.map(product => (
            <li key={product.shopifyId}>
              <NavLink
                onClick={() => exit()}
                to={`/deli/${collection.handle}/${product.handle}`}
              >
                {product.title}
              </NavLink>
            </li>
          ))}
        </CollectionList>
      ))}
    </>
  );
};

export default CategoryMenu;
