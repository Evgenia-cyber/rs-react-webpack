import React from 'react';
import { options } from '../constants/constants';

const Select = ({ value, handleChange }) => (
  <label htmlFor="country">
    <p className="label">Country:</p>
    <select name="country" type="text" value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
