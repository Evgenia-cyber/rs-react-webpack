import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <div className="app-container">
    <Header />
    <Route exact path="/">
      {({ match }) => (
        <CSSTransition classNames="page-animation" in={match != null} timeout={{ enter: 500, exit: 350 }} unmountOnExit>
          <div className="page-animation">
            <Home />
          </div>
        </CSSTransition>
      )}
    </Route>
    <Route exact path="/about">
      {({ match }) => (
        <CSSTransition classNames="page-animation" in={match != null} timeout={{ enter: 500, exit: 350 }} unmountOnExit>
          <div className="page-animation">
            <About />
          </div>
        </CSSTransition>
      )}
    </Route>
  </div>
);

export default App;
