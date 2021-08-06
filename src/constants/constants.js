export const options = ['Russia', 'Belarus', 'Ukraine'];

export const genders = ['male', 'female'];

export const initFormData = {
  firstName: { value: '', error: '' },
  lastName: { value: '', error: '' },
  phone: { value: '', error: '' },
  deliveryDate: { value: '', error: '' },
  country: { value: options[0], error: '' },
  gender: { value: genders[0], error: '' },
  agreeToDataProcessing: { value: false, error: '' },
};
