import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import renderApp from './renderApp';
import renderTemplate from './renderTemplate';
// import { defaultCurrentPage, minPageSize, sorts } from './constants/constants';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  const context = {};

  const preloadedState = {
    home: { cards: [] },
    //  home: { cards: [],
    //  searchValue: '',
    //  sortBy: sorts[0],
    //  pageSize: minPageSize,
    //  totalPages: 0,
    //  currentPage: defaultCurrentPage,
    //  isPaginatorBtnClicked: false,
    //  isLoading: false,}
    //  details: { info: '', isRedirectToHome: false },
  };

  const store = configureStore({
    reducer: (state) => state,
    preloadedState,
  });

  // serialize content to string
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderApp()}
      </StaticRouter>
    </Provider>
  );

  // send data
  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    })
  );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port: 3000');
});
