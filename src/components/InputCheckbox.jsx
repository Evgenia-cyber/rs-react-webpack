import React from 'react';

const InputCheckbox = ({ isChecked, handleChange }) => (
  <label className="checkbox" htmlFor="agreeToDataProcessing">
    <input
      className="checkbox-mark"
      name="agreeToDataProcessing"
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
    <p>I agree to data processing.{!isChecked && <span className="error">You must agree!</span>}</p>
  </label>
);

export default InputCheckbox;
