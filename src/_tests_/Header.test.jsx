import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import App from '../App';
import store from '../redux/store';

describe('Navigation from the menu', () => {
  it('should contain in url "/" after clicking on the menu item Home', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    userEvent.click(screen.getByText(/Home/));

    expect(history.location.pathname).toEqual('/');
  });

  it('should go to Home page after clicking on the menu item Home', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    userEvent.click(screen.getByText(/Home/));

    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  it('should contain in url "/about" after clicking on the menu item About', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    userEvent.click(screen.getByText(/About/));

    expect(history.location.pathname).toEqual('/about');
  });

  it('should go to About page after clicking on the menu item About', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    userEvent.click(screen.getByText(/About/));

    expect(screen.getByText(/This is page About/)).toBeInTheDocument();
  });
});
