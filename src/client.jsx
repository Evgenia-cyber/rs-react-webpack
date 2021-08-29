import { hydrate } from 'react-dom';

import renderApp from './renderApp';

function run() {
  hydrate(renderApp(), document.getElementById('root'));
}

run();
