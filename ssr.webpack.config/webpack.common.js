/* eslint-disable import/no-extraneous-dependencies */
const { join } = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// target - 'client' or 'server'
function createConfig({ target }) {
  // Root of project
  const root = join(__dirname, '../');

  // Source directory
  const src = join(root, 'src');

  // Name of output bundles
  const name = '[name].js';

  // Path for compiled assets
  const dist = join(root, 'dist', target);

  const IS_SERVER = target === 'server';
  const IS_CLIENT = target === 'client';

  return {
    name: target,
    entry: join(src, target),

    mode: 'development',

    output: {
      path: dist,
      filename: name,
      chunkFilename: name,
      publicPath: '/',
      assetModuleFilename: 'assets/icons/[name][ext]',
    },

    resolve: {
      modules: ['node_modules', 'src'],
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
          test: /\.(png|gif|svg|jpe?g)$/,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        failOnError: true,
      }),
      new webpack.DefinePlugin({
        IS_CLIENT: JSON.stringify(IS_CLIENT),
        IS_SERVER: JSON.stringify(IS_SERVER),
        'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined'),
        'process.env': JSON.stringify(dotenv.config().parsed),
      }),
      // new CopyWebpackPlugin({
      //   patterns: [{ from: 'src/assets', to: 'assets' }],
      // }),
    ],
    devtool: 'inline-source-map',
  };
}

module.exports = {
  createConfig,
};
