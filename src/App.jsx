import React from 'react';
import Header from './components/Header';
import RouteWithAnimation from './components/RouteWithAnimation';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <div className="app-container">
    <Header />
    <RouteWithAnimation path="/">
      <Home />
    </RouteWithAnimation>
    <RouteWithAnimation path="/about">
      <About />
    </RouteWithAnimation>
  </div>
);

export default App;
