import React from 'react';

const InputCheckbox = ({ isChecked, handleChange }) => (
  <label htmlFor="agreeToDataProcessing">
    <input name="agreeToDataProcessing" type="checkbox" checked={isChecked} onChange={handleChange} />
    <p>I agree to data processing. {!isChecked && <span>You must agree!</span>}</p>
  </label>
);

export default InputCheckbox;
