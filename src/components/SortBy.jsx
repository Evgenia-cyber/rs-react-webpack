import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sorts } from '../constants/constants';
import { setSortBy, sortBySlice } from '../redux/slices/homeSlice';

const SortBy = () => {
  const dispatch = useDispatch();

  const checkedSortBy = useSelector(sortBySlice);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setSortBy(value));
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
