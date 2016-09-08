var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      path.resolve('./src/index.jsx')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js'
  },

  resolve: {
    extensions: ['','.js','.jsx']
  },

  module: {
    preLoaders: [{
      test: '/\.(js|jsx)$/',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],

    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
         presets: ['es2015', 'react']
      }
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
    },{
       test: /\.css$/,
       loader: 'style!css!autoprefixer-loader?{browsers:["last 2 version"]}'
    },{
      test: /\.json/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svgs)$/,
      loader: 'url-loader?limit=8192'
    }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }]
  }
}
