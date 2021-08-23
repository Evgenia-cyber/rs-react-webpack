import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import store from '../redux/store';
import App from '../App';
import Home from '../pages/Home';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
  cleanup(); // для очистки после использования методов из библиотеки @testing-library
});

describe('Render App', () => {
  it('should render App without crashing', () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
        container
      );
    });
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

  it('should render Home page immediately after starting the application (with snapshot)', () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <Home />
        </Provider>,
        container
      );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
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
