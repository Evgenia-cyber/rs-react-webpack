import React from 'react';
import searchImg from '../assets/icons/magnifier.svg';

const SearchBar = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`Вы ввели: ${value}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <img className="img" src={searchImg} alt="лупа" />
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите название тура..."
      />
      <input className="submit-btn" type="submit" value="Найти" />
    </form>
  );
};

export default SearchBar;
