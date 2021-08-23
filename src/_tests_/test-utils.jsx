/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { render as rtlRender } from '@testing-library/react';

// Импортируем свои reducers
import homeReducer from '../redux/slices/homeSlice';
import detailsReducer from '../redux/slices/detailsSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        home: homeReducer,
        details: detailsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
