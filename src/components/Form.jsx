import axios from 'axios';
import React from 'react';
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
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
      );
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
