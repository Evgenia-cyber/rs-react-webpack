import React from 'react';
import { initFormData } from '../constants/constants';
import { isFormValid, telFormatted, validateForm } from '../utils/validate';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import InputType from './InputType';
import Select from './Select';

const Form = ({ setCards }) => {
  const [formData, setFormData] = React.useState(initFormData);

  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    const isValid = isFormValid(formData);
    setIsSubmitBtnDisabled(!isValid);
  }, [formData]);

  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    let { value } = event.target;
    value = type === 'checkbox' ? checked : value;
    setFormData((data) => ({ ...data, [name]: { ...data[name], value } }));
  };

  const validate = (name, type, value) => {
    const error = validateForm(value, type);
    setFormData((data) => ({ ...data, [name]: { ...data[name], error } }));
    if (type === 'tel' && !error) {
      const tel = telFormatted(value);
      setFormData((data) => ({ ...data, [name]: { value: tel, error: '' } }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      name: `${formData.firstName.value} ${formData.lastName.value}`,
      phone: formData.phone.value,
      deliveryDate: formData.deliveryDate.value,
      country: formData.country.value,
      gender: formData.gender.value,
    };
    setCards((cards) => [...cards, newCard]);
    setFormData(initFormData);
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
      <button className="submit-btn" type="submit" disabled={isSubmitBtnDisabled}>
        Submit
      </button>
    </form>
  );
};

export default Form;
