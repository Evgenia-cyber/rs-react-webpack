import React from 'react';
import { genders } from '../constants/constants';

const InputRadio = ({ checkedGender, handleChange }) => (
  <div>
    <p className="label">Gender:</p>
    <div className="genders">
      {genders.map((gender) => (
        <label key={gender} htmlFor={gender}>
          <input
            className="gender"
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
  </div>
);

export default InputRadio;
