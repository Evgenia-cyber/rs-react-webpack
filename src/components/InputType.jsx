import React from 'react';

const InputType = ({ label, name, type, value, handleChange, validate, error }) => (
  <label htmlFor={name}>
    <p>
      {label}
      <span>error message {error}</span>
    </p>
    <input name={name} type={type} value={value} onChange={handleChange} onBlur={validate} />
  </label>
);

export default InputType;
