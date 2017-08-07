const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
