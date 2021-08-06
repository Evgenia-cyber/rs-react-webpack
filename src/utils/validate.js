export const telValidate = (value) => {
  if (value.length !== 11) {
    return 'This field must be 11 digits!';
  }
  const reg = /^\D+$/;
  if (reg.test(value)) {
    return 'This field must contain only numbers!';
  }
  return '';
};

// eslint-disable-next-line arrow-body-style
export const telFormatted = (value) => {
  return `+${value[0]}(${value.substring(1, 4)})${value.substring(4, 7)}-${value.substring(7, 9)}-${value.substring(
    9
  )}`;
};

export const deliveryDateValidate = (value) => {
  const now = new Date();
  const deliveryDate = new Date(value);
  if (deliveryDate <= now) {
    return 'Select a date later than today!';
  }
  return '';
};

export const validateForm = (value, type) => {
  if (!value.length) {
    return 'This field is required!';
  }
  if (type === 'tel') {
    return telValidate(value);
  }
  if (type === 'date') {
    return deliveryDateValidate(value);
  }
  return '';
};

export const isFormValid = (data) => {
  const errors = Object.values(data).filter((item) => item.error || !item.value);
  return errors.length === 0;
};
