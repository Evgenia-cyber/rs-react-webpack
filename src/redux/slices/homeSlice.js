import { createSlice } from '@reduxjs/toolkit';
import { defaultCurrentPage, minPageSize, sorts } from '../../constants/constants';
import { fetchArticles } from '../../services/api';
import { formattedResponse } from '../../utils/formattedResultFromResponse';

const initialState = {
  cards: [],
  searchValue: '',
  sortBy: sorts[0],
  pageSize: minPageSize,
  totalPages: 0,
  currentPage: defaultCurrentPage,
  isPaginatorBtnClicked: false,
  isLoading: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setIsPaginatorBtnClicked: (state, action) => {
      state.isPaginatorBtnClicked = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCards,
  setSearchValue,
  setSortBy,
  setPageSize,
  setTotalPages,
  setCurrentPage,
  setIsPaginatorBtnClicked,
  setIsLoading,
} = homeSlice.actions;

export const fetchArticlesAfterSubmit = (searchValue, sortBy, pageSize, currentPage) => async (dispatch) => {
  dispatch(setIsPaginatorBtnClicked(false));
  dispatch(setIsLoading(true));
  try {
    const response = await fetchArticles(searchValue, sortBy, pageSize);
    const { articles } = response.data;
    if (articles.length === 0) {
      dispatch(setCards(`Sorry, your search "${searchValue}" did not return any results.`));
    } else {
      dispatch(setCards(formattedResponse(articles)));
      const totalPages = Math.ceil(response.data.totalResults / pageSize);
      if (currentPage !== defaultCurrentPage) {
        dispatch(setCurrentPage(defaultCurrentPage));
      }
      dispatch(setTotalPages(totalPages));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-alert
    alert(error);
  } finally {
    dispatch(setIsLoading(false));
  }
};

export const fetchArticlesWhenPaginatorBtnClicked =
  (searchValue, sortBy, pageSize, currentPage) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
      const response = await fetchArticles(searchValue, sortBy, pageSize, currentPage);
      const { articles } = response.data;
      dispatch(setCards(formattedResponse(articles)));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const cardsSlice = (state) => state.home.cards;
export const searchValueSlice = (state) => state.home.searchValue;
export const sortBySlice = (state) => state.home.sortBy;
export const pageSizeSlice = (state) => state.home.pageSize;
export const currentPageSlice = (state) => state.home.currentPage;
export const isLoadingSlice = (state) => state.home.isLoading;
export const totalPagesSlice = (state) => state.home.totalPages;
export const isPaginatorBtnClickedSlice = (state) => state.home.isPaginatorBtnClicked;

export default homeSlice.reducer;
