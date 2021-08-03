import React from 'react';
import Card from './components/Card';
import img from './img/img.jpg';
import imgSVG from './img/youtube.svg';

const App = () => {
  const a = '7';
  console.log(a);
  return (
    <>
      <h1 className="container">App1</h1>
      <Card />
      <img src={img} alt="img" />
      <img src={imgSVG} alt="img" />
    </>
  );
};

export default App;
