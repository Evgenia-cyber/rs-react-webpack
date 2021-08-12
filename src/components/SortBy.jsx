import React from 'react';
import { sorts } from '../constants/constants';

const SortBy = ({ checkedSortBy, setSortBy }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setSortBy(value);
  };

  return (
    <div>
      <p className="label">Sort by:</p>
      <div className="sorts">
        {sorts.map((sort) => (
          <label key={sort} htmlFor={sort}>
            <input
              className="sort"
              name="sort"
              id={sort}
              type="radio"
              value={sort}
              checked={checkedSortBy === sort}
              onChange={handleChange}
            />
            {sort}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
