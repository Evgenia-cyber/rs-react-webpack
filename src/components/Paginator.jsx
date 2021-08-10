import React from 'react';
import axiosInstance from '../services/api';
import { formattedDate, formattedDescription } from '../utils/formattedResultFromResponse';

const Paginator = ({
  searchValue,
  sortBy,
  pageSize,
  totalPages,
  currentPage,
  setCurrentPage,
  setCards,
  setIsLoading,
}) => {
  React.useEffect(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('v2/everything', {
        params: {
          q: searchValue,
          sortBy,
          pageSize,
          page: currentPage,
        },
      });
      const { articles } = response.data;
      const formattedResponse = articles.map(
        ({ author, title, description, publishedAt, source, url, urlToImage }) => ({
          author,
          title,
          description: formattedDescription(description),
          publishedAt: formattedDate(publishedAt),
          source: source.name,
          url,
          urlToImage,
        })
      );
      setCards(formattedResponse);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  const handleClick = (event) => {
    const value = event.target.innerText;
    setCurrentPage(value);
  };

  const handleClickToPrevClick = () => {
    setCurrentPage((value) => value - 1);
  };

  const handleToNextClick = () => {
    setCurrentPage((value) => Number(value) + 1);
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
