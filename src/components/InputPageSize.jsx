import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { maxPageSize, minPageSize } from '../constants/constants';
import { pageSizeSlice, setPageSize } from '../redux/slices/homeSlice';

const InputPageSize = () => {
  const dispatch = useDispatch();

  const pageSize = useSelector(pageSizeSlice);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setPageSize(value));
  };

  return (
    <label className="label" htmlFor="page-size">
      Number of results per page (from {minPageSize} to {maxPageSize}):
      <input
        className="page-size-input"
        name="page-size"
        type="number"
        value={pageSize}
        min={minPageSize}
        max={maxPageSize}
        onChange={handleChange}
      />
    </label>
  );
};

export default InputPageSize;
