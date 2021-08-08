import React from 'react';

const InputType = ({ label, name, type, value, handleChange, validate, error }) => (
  <label htmlFor={name}>
    <p className="label">
      {label}
      <span className="error">{error}</span>
    </p>
    <input
      className="input-text"
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      onBlur={() => validate(name, type, value)}
    />
  </label>
);

export default InputType;
