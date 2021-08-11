import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const RouteWithAnimation = ({ path, children }) => {
  const nodeRef = React.useRef(null);

  return (
    <Route exact path={path}>
      {({ match }) => (
        <CSSTransition
          classNames="page-animation"
          nodeRef={nodeRef}
          in={match != null}
          timeout={{ enter: 500, exit: 350 }}
          unmountOnExit
        >
          <div className="page-animation" ref={nodeRef}>
            {children}
          </div>
        </CSSTransition>
      )}
    </Route>
  );
};

export default RouteWithAnimation;
