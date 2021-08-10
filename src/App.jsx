import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
