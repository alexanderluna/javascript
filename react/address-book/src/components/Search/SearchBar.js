import React from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSearchInput, searchValue }) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="search"
        onChange={handleSearchInput}
      />
      {searchValue && (
        <h2 className="search-term">
          Names matching:
          <span>{searchValue}</span>
        </h2>
      )}
    </div>
  )
}

export default SearchBar;
