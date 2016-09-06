var webpack = require('webpack');
var path = require('path');

module.exports = {
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

  module: {
    preLoaders: [{
      test: '/\.(js|jsx)$/',
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],

    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.sass/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    },{
       test: /\.css$/,
       loader: 'style!css'
    }, {
      test: /\.(png|jpg|gif|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
}
