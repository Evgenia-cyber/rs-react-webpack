import React from 'react';
import { defaultPageNumber } from '../constants/constants';
import axiosInstance from '../services/api';
import { formattedDate, formattedDescription } from '../utils/formattedResultFromResponse';

const Paginator = ({ searchValue, sortBy, pageSize, totalPages, setCards, setIsLoading }) => {
  const [currentPage, setCurrentPage] = React.useState(defaultPageNumber);

  const handleClick2 = async (event) => {
    const value = event.target.innerText;
    setCurrentPage(value);
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
      if (!articles.length) {
        setCards(`Sorry, your search "${searchValue}" did not return any results.`);
      }
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
  };

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
        <button className="paginator-btn" type="button" onClick={handleClick2}>
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
