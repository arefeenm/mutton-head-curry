/* eslint-disable */
const common = require('./webpack.common.js'),
  merge = require('webpack-merge'),
  path = require('path'),
  webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify('http://localhost:3007'),
      'process.env.API_BASE_URL': JSON.stringify('http://localhost:8009/api')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    watchContentBase: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});
