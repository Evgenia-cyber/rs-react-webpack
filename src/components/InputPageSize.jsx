import React from 'react';
import { maxPageSize, minPageSize } from '../constants/constants';

const InputPageSize = ({ pageSize, setPageSize }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setPageSize(value);
  };

  return (
    <label className="label" htmlFor="page-size">
      Number of results per page (from 10 to 100):
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
