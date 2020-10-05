// webpack.config.js
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production', // 'development' just doesn't work here :,(
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  target: 'web',
  optimization: {
      namedModules: true,
      namedChunks: true,
      nodeEnv: 'development',
      minimize: false
  },
  /*plugins: [
      new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
      }, {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader',
                'sass-loader'
            ]
        })
       },
    ]
  },
  */
  
});
