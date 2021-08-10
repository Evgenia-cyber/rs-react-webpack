import React from 'react';
import axiosInstance from '../services/api';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SortBy from './SortBy';
import { formattedDate, formattedDescription } from '../utils/formattedResultFromResponse';
import InputPageSize from './InputPageSize';

const Form = ({
  searchValue,
  sortBy,
  pageSize,
  isLoading,
  setCards,
  setIsLoading,
  setSearchValue,
  setSortBy,
  setPageSize,
  setTotalPages,
  setCurrentPage,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('v2/everything', {
        params: {
          q: searchValue,
          sortBy,
          pageSize,
          page: '1',
        },
      });
      const { articles } = response.data;
      if (articles.length === 0) {
        setCards(`Sorry, your search "${searchValue}" did not return any results.`);
      } else {
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
        const totalPages = Math.ceil(response.data.totalResults / pageSize);
        setCurrentPage('1');
        setTotalPages(totalPages);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SearchBar isLoading={isLoading} searchValue={searchValue} setSearchValue={setSearchValue} />
      <SortBy checkedSortBy={sortBy} setSortBy={setSortBy} />
      <InputPageSize pageSize={pageSize} setPageSize={setPageSize} />
      <SearchBtn isLoading={isLoading} />
    </form>
  );
};

export default Form;
