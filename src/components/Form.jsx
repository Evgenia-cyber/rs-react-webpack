import React from 'react';
import { initFormData } from '../constants/constants';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import InputType from './InputType';
import Select from './Select';

const Form = ({ setCards }) => {
  const [formData, setFormData] = React.useState(initFormData);

  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    let { value } = event.target;
    value = type === 'checkbox' ? checked : value;
    setFormData((data) => ({ ...data, [name]: { ...name, value } }));
  };

  const validate = () => {
    console.log('Triggered because this input lost focus');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCards([]);
    // eslint-disable-next-line no-alert
    alert('Data sent successfully!');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputType
        label="Name:"
        name="firstName"
        type="text"
        value={formData.firstName.value}
        handleChange={handleChange}
        validate={validate}
        error={formData.firstName.error}
      />
      <InputType
        label="Surname:"
        name="lastName"
        type="text"
        value={formData.lastName.value}
        handleChange={handleChange}
        validate={validate}
        error={formData.lastName.error}
      />
      <InputType
        label="Phone:"
        name="phone"
        type="tel"
        value={formData.phone.value}
        handleChange={handleChange}
        validate={validate}
        error={formData.phone.error}
      />
      <InputType
        label="Delivery date:"
        name="deliveryDate"
        type="date"
        value={formData.deliveryDate.value}
        handleChange={handleChange}
        validate={validate}
        error={formData.deliveryDate.error}
      />
      <Select value={formData.country.value} handleChange={handleChange} />
      <InputRadio checkedGender={formData.gender.value} handleChange={handleChange} />
      <InputCheckbox isChecked={formData.agreeToDataProcessing.value} handleChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
