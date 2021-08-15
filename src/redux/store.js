import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './slices/homeSlice';
import detailsReducer from './slices/detailsSlice';

export default configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
});
