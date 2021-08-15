import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SortBy from './SortBy';
import InputPageSize from './InputPageSize';
import {
  currentPageSlice,
  fetchArticlesAfterSubmit,
  pageSizeSlice,
  searchValueSlice,
  sortBySlice,
} from '../redux/slices/homeSlice';

const Form = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(searchValueSlice);
  const sortBy = useSelector(sortBySlice);
  const pageSize = useSelector(pageSizeSlice);
  const currentPage = useSelector(currentPageSlice);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(fetchArticlesAfterSubmit(searchValue, sortBy, pageSize, currentPage));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SearchBar />
      <SortBy />
      <InputPageSize />
      <SearchBtn />
    </form>
  );
};

export default Form;
