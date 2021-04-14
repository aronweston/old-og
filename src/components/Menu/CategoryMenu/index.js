import React from 'react';
import {
  //   ChevronDown,
  CollectionHeader,
  CollectionList,
  NavLink,
} from './styles';

const CategoryMenu = ({ collections, exit }) => {
  //   const [productsVisible, setProductsVisible] = useState(false);
  //   const showProducts = () => {
  //     !productsVisible ? setProductsVisible(true) : setProductsVisible(false);
  //   };
  return (
    <>
      {collections.map(collection => (
        <CollectionList key={collection.shopifyId}>
          <CollectionHeader>
            <strong>{collection.title}</strong>
            {/* <button onClick={showProducts}> */}
            {/* <ChevronDown /> */}
            {/* </button> */}
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
