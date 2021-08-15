import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: '',
  isRedirectToHome: false,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setIsRedirectToHome: (state, action) => {
      state.isRedirectToHome = action.payload;
    },
  },
});

export const { setInfo, setIsRedirectToHome } = detailsSlice.actions;

export const infoSlice = (state) => state.details.info;
export const isRedirectToHomeSlice = (state) => state.details.isRedirectToHome;

export default detailsSlice.reducer;
