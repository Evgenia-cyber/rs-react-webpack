export const options = ['Russia', 'Belarus', 'Ukraine'];

export const genders = ['male', 'female'];

export const initFormData = {
  firstName: { value: '', error: '' },
  lastName: { value: '', error: '' },
  phone: { value: '', error: '' },
  deliveryDate: { value: '', error: '' },
  country: { value: options[0] },
  gender: { value: genders[0] },
  agreeToDataProcessing: { value: true },
};
