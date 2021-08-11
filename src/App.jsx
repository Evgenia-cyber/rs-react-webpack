import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <TransitionGroup>
        <CSSTransition
          classNames="page-animation"
          key={location.pathname}
          timeout={{
            enter: 500,
            exit: 350,
          }}
        >
          <div className="page-animation">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
