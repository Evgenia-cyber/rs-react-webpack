import React from 'react';
import Card from './components/Card';
import img from './img/img.jpg';
import imgSVG from './img/youtube.svg';

const App = () => {
  const unused = 2;
  return (
    <>
      <h1 className="container">App1</h1>
      <Card />
      <img src={img} />
      <img src={imgSVG} />
    </>
  );
};

export default App;
