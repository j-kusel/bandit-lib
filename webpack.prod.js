// webpack.config.js
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
});
