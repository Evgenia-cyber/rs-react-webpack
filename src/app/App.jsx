import React from 'react';
import Card from './components/Card';
// import img from "./img/img.jpg";

import './style.scss';

const App = () => {
  // const unused = 2;
  return (
    <>
      <h1 className="container">App</h1>
      <Card />
      <img src="./img/img.jpg" />
    </>
  );
};

export default App;
