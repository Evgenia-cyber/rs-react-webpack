import React from 'react';
import { genders } from '../constants/constants';

const InputRadio = ({ checkedGender, handleChange }) => (
  <div>
    <p>Gender:</p>
    {genders.map((gender) => (
      <label key={gender} htmlFor={gender}>
        <input
          name="gender"
          id={gender}
          type="radio"
          value={gender}
          checked={checkedGender === gender}
          onChange={handleChange}
        />
        {gender}
      </label>
    ))}
  </div>
);

export default InputRadio;
