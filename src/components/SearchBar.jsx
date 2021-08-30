import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import magnifierImg from '../assets/icons/magnifier.svg';
import { isLoadingSlice, searchValueSlice, setSearchValue } from '../redux/slices/homeSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(searchValueSlice);
  const isLoading = useSelector(isLoadingSlice);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setSearchValue(value));
  };

  return (
    <label className="search" htmlFor="search">
      <div className="search-icon">{isLoading ? <Loader /> : <img src={magnifierImg} alt="" />}</div>
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
