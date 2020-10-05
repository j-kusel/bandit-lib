// webpack.config.js
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          /*options: {
            presets: ['@babel/plugin-syntax-jsx'] //'@babel/preset-env', '@babel/preset-react']
          }*/
        }
      }/* {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader',
                'sass-loader'
            ]
        })
       },*/
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    "styled-components": 'styled-components',
    'react-bootstrap': 'react-bootstrap'
  }
};
