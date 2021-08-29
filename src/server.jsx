import express from 'express';

import { renderToString } from 'react-dom/server';

import renderApp from './renderApp';
import renderTemplate from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  // serialize content to string
  const content = renderToString(renderApp());

  // send data
  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    })
  );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port: 3000');
});
