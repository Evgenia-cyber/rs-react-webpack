/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common').createConfig({
  target: 'client',
});

module.exports = {
  ...config,

  module: {
    ...config.module,

    rules: [
      ...config.module.rules,

      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
