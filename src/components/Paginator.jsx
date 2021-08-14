import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentPageSlice,
  fetchArticlesWhenPaginatorBtnClicked,
  isPaginatorBtnClickedSlice,
  pageSizeSlice,
  searchValueSlice,
  setCurrentPage,
  setIsPaginatorBtnClicked,
  sortBySlice,
  totalPagesSlice,
} from '../redux/slices/homeSlice';

const Paginator = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(searchValueSlice);
  const sortBy = useSelector(sortBySlice);
  const pageSize = useSelector(pageSizeSlice);
  const currentPage = useSelector(currentPageSlice);
  const totalPages = useSelector(totalPagesSlice);
  const isPaginatorBtnClicked = useSelector(isPaginatorBtnClickedSlice);

  React.useEffect(async () => {
    if (isPaginatorBtnClicked) {
      dispatch(fetchArticlesWhenPaginatorBtnClicked(searchValue, sortBy, pageSize, currentPage));
    }
  }, [currentPage, isPaginatorBtnClicked]);

  const handleClick = (event) => {
    const value = event.target.innerText;
    dispatch(setCurrentPage(value));
    dispatch(setIsPaginatorBtnClicked(true));
  };

  const handleClickToPrevClick = () => {
    dispatch(setCurrentPage((value) => value - 1));
    dispatch(setIsPaginatorBtnClicked(true));
  };

  const handleToNextClick = () => {
    dispatch(setCurrentPage((value) => Number(value) + 1));
    dispatch(setIsPaginatorBtnClicked(true));
  };

  return (
    <div className="paginator">
      {currentPage > 1 && (
        <button className="paginator-btn" type="button" onClick={handleClick}>
          1
        </button>
      )}
      {currentPage > 3 && (
        <button className="paginator-dot" type="button" onClick={handleClickToPrevClick}>
          {}
        </button>
      )}
      {currentPage > 2 && (
        <button className="paginator-btn" type="button" onClick={handleClick}>
          {currentPage - 1}
        </button>
      )}
      <button className="paginator-btn paginator-btn-active" type="button">
        {currentPage}
      </button>
      {currentPage < totalPages - 1 && (
        <button className="paginator-btn" type="button" onClick={handleClick}>
          {Number(currentPage) + 1}
        </button>
      )}
      {currentPage < totalPages - 2 && (
        <button className="paginator-dot" type="button" onClick={handleToNextClick}>
          {}
        </button>
      )}
      {currentPage < totalPages && (
        <button className="paginator-btn" type="button" onClick={handleClick}>
          {totalPages}
        </button>
      )}
    </div>
  );
};

export default Paginator;
