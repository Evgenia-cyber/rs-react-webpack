import React from 'react';
import Card from './components/Card';
import img from './img/img.jpg';

const App = () => {
  const unused = 2;
  return (
    <>
      <h1 className="container">App</h1>
      <Card />
      <img src={img} />
    </>
  );
};

export default App;
