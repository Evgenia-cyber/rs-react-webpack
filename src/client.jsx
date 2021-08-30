import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import renderApp from './renderApp';
import homeReducer from './redux/slices/homeSlice';
import detailsReducer from './redux/slices/detailsSlice';
import restoreDataOnClient from './data/restoreDataOnClient';

function run(store) {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderApp()}</BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

const preloadedState = restoreDataOnClient();

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
  preloadedState,
});

run(store);
