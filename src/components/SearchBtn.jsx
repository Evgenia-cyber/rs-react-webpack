import React from 'react';

const SearchBtn = ({ isLoading }) => (
  <button className="submit-btn" type="submit" disabled={isLoading}>
    Search
  </button>
);

export default SearchBtn;
