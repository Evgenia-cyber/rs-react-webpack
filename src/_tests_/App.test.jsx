import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import store from '../redux/store';
import App from '../App';

describe('Render App', () => {
  it('should render App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Routing in the application', () => {
  it('should contain in url "/" immediately after starting the application', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    expect(history.location.pathname).toEqual('/');
  });

  it('should be in Home page immediately after starting the application', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Search/)).toBeInTheDocument();
  });

  it('should be in NotFound page if unknown url', () => {
    const history = createMemoryHistory();
    const unknownRoute = '/some-unknown-route';
    history.push(unknownRoute);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/No such page exists/)).toBeInTheDocument();
  });
});
