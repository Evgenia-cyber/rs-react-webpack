import React from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSlice } from '../redux/slices/homeSlice';

const SearchBtn = () => {
  const isLoading = useSelector(isLoadingSlice);

  return (
    <button className="submit-btn" type="submit" disabled={isLoading}>
      Search
    </button>
  );
};

export default SearchBtn;
