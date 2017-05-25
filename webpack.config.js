var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:3300',
    'webpack/hot/only-dev-server',
    './assets/react/'
  ],
  output: {
    path: path.join(__dirname,'./public/web/dist'),
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:3300/static/'
  },
  resolve: {
    extensions: ['', '.jsx', '.js','.scss','.eot','.svg','.ttf','.woff','.woff2','.png','.jpg']
  },
  module: {
    exprContextCritical: false,
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'assets/react'),
        loaders: ["babel"]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      },/*
         {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract('css!resolve-url!sass',{
         publicPath: "/"
         })
         },*/
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=8192?name=images/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff?name=fonts/[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};

module.exports = config;
