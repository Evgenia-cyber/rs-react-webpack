import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
// Используем свою функцию render, а не render
// из @testing-library/react (our custom utils
// also re-export everything from RTL
// so we can import fireEvent and screen here
// as well)
import { render, screen, cleanup } from './test-utils';

import App from '../App';
import mockCards from '../../__mocks__/mockCards';

afterEach(() => {
  cleanup();
});

describe('Home page testing when the results are received from the newsapi', () => {
  it('should render cards when the articles are received from the newsapi', () => {
    const initialState = {
      home: { cards: mockCards },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    expect(container.querySelector('.no-results')).toBeNull();

    expect(container.querySelectorAll('.card-container')).toHaveLength(mockCards.length);

    expect(container.querySelectorAll('.more-btn')).toHaveLength(mockCards.length);

    expect(screen.getByText(`${mockCards[0].author}`)).toBeInTheDocument();

    expect(screen.getByText(`${mockCards[1].author}`)).toBeInTheDocument();
  });

  it('should render "did not return any results" if no articles for this request were found from newsapi', () => {
    const mockNoResultsFromApi = 'did not return any results';

    const initialState = {
      home: { cards: mockNoResultsFromApi },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    expect(container.querySelector('.card-container')).toBeNull();

    expect(container.querySelectorAll('.no-results')).toHaveLength(1);

    expect(screen.getByText(/did not return any results/)).toBeInTheDocument();
  });
});

describe('Home page testing when the results are fetching from the newsapi', () => {
  it('should render Loader', () => {
    const initialState = {
      home: { isLoading: true, cards: [] },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    expect(container.querySelector('.loader')).toBeInTheDocument();

    expect(screen.queryByAltText('magnifier')).toBeNull();
  });

  it('should disabled SearchBtn', () => {
    const initialState = {
      home: { isLoading: true, cards: [] },
    };

    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: initialState }
    );

    expect(container.querySelector('.submit-btn')).toHaveAttribute('disabled');
  });
});
