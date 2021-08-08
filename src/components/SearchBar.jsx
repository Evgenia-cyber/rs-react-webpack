import React from 'react';
import Loader from './Loader';
import magnifierImg from '../assets/icons/magnifier.svg';

const SearchBar = ({ isLoading, searchValue, setSearchValue }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <label className="search" htmlFor="search">
      <div className="search-icon">{isLoading ? <Loader /> : <img src={magnifierImg} alt="magnifier" />}</div>
      <input
        className="search-bar"
        name="search"
        type="text"
        value={searchValue}
        onChange={handleChange}
        required
        minLength="3"
        maxLength="40"
        placeholder="Search..."
        disabled={isLoading}
      />
    </label>
  );
};

export default SearchBar;
