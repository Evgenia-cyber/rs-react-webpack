// import '@babel/polyfill';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import path from 'path';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  //   entry: {
  //     main: ['@babel/polyfill', './src/app/index.js', './src/css/main.scss'],
  //   },
  entry: './src/index.js',
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/img', to: 'build/img' }],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/img/favicon.png',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    hot: true,
    open: true,
  },
};
