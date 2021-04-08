import React, { useState } from 'react';
import { SearchContainer } from './styles';

export const Search = ({ visible, crossClick }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <SearchContainer visible={visible ? true : null}>
      <div>
        <h1>Search</h1>
        <span onClick={crossClick}>X</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
    </SearchContainer>
  );
};
