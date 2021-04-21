import React, { useState } from 'react';
import {
  ChevronDown,
  CollectionHeader,
  CollectionList,
  NavLink,
} from './styles';
import { Link } from 'gatsby';

const CategoryMenu = ({ collections, exit }) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const CategoryLinks = ({ collection: { title, handle } }) => {
    if (selectedCategory?.title === title) {
      return (
        <CollectionList>
          {selectedCategory?.products.map(product => (
            <li key={product.shopifyId}>
              <NavLink
                onClick={() => exit()}
                to={`/deli/${selectedCategory.handle}/${product.handle}`}
              >
                {product.title}
              </NavLink>
            </li>
          ))}
        </CollectionList>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {collections.map(collection => (
        <div key={collection.shopifyId}>
          <CollectionHeader>
            <Link onClick={() => exit()} to={`/deli/${collection.handle}`}>
              {collection.title}
            </Link>
            <button
              onClick={() =>
                setSelectedCategory(
                  collections.find(x => x.shopifyId === collection.shopifyId)
                )
              }
            >
              <ChevronDown />
            </button>
          </CollectionHeader>

          <CategoryLinks
            collection={{
              title: collection.title,
              handle: collection.handle,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default CategoryMenu;
