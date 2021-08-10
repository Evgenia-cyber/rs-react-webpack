import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
);

export default App;
