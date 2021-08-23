import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { cleanup, render, screen } from './test-utils';
import '../../__mocks__/localStorageMock';

import App from '../App';
import mockCards from '../../__mocks__/mockCards';

afterEach(() => {
  cleanup();
});

describe('Details page testing', () => {
  it('should add data to localStorage when button "More info" on the card with index = 0 is clicked', () => {
    const initialState = {
      home: { cards: mockCards },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    const spyLocalStorageSetItem = jest.spyOn(localStorage, 'setItem');
    const spyLocalStorageGetItem = jest.spyOn(localStorage, 'getItem');

    userEvent.click(container.querySelectorAll('.more-btn')[0]);

    expect(spyLocalStorageSetItem).toHaveBeenCalled();
    expect(spyLocalStorageGetItem).toHaveBeenCalled();
  });

  it('should contain in url "/details/0"  when button "More info" on the card with index = 0 is clicked', () => {
    const history = createMemoryHistory();

    const initialState = {
      home: { cards: mockCards },
    };

    const { container } = render(
      <Router history={history}>
        <App />
      </Router>,
      { preloadedState: initialState }
    );

    userEvent.click(container.querySelectorAll('.more-btn')[0]);

    expect(history.location.pathname).toEqual('/details/0');
    expect(history.location.pathname).not.toEqual('/details/1');
  });

  it('should render Details page when button "More info" on the card with index = 0 is clicked', () => {
    const initialState = {
      details: { info: { ...mockCards[0], index: 0 } },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    expect(container.querySelectorAll('.more-btn')).toHaveLength(0);

    expect(screen.getByText(`${mockCards[0].content}`)).toBeInTheDocument();

    expect(screen.queryByText(`${mockCards[0].description}`)).toBeNull();
  });
});
