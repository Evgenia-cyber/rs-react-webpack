/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
    clean: true,
    assetModuleFilename: 'images/[name][hash][ext]',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { collapseWhitespace: true },
      favicon: './src/assets/icons/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: extendDefaultPlugins([
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'addAttributesToSVGElement',
                  params: {
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  devtool: 'inline-source-map',
};
