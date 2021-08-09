import React from 'react';
import axiosInstance from '../services/api';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';

const Form = ({ setCards }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCards([]);
    setIsLoading(true);
    try {
      const response = await axiosInstance.get('v2/everything', {
        params: {
          q: searchValue,
        },
      });
      console.log('searchValue', searchValue);
      console.log('data', response.data);
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

      <SearchBtn isLoading={isLoading} />
    </form>
  );
};

export default Form;
