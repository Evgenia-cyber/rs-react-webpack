import React from 'react';
import axiosInstance from '../services/api';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import SortBy from './SortBy';
import { formattedDate, formattedDescription } from '../utils/formattedResultFromResponse';
import { minPageSize, sorts } from '../constants/constants';
import InputPageSize from './InputPageSize';

const Form = ({ setCards }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const [sortBy, setSortBy] = React.useState(sorts[0]);

  const [pageSize, setPageSize] = React.useState(minPageSize);

  // const [currentPage, setCurrentPage] = React.useState(defaultPageNumber);

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('v2/everything', {
        params: {
          q: searchValue,
          sortBy,
          pageSize,
          // page: currentPage,
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
