const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:__dirname + './dist',
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:{
          loaders: {
            css:ExtractTextPlugin.extract({
              use:'css-loader',
              fallback:'vue-style-loader'
            })
          }
        }
      },
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
          use: ['css-loader','postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      },
      {
        test:/\.(png|jpg|git)$/,
        loader:'url-loader?limit=1024'
      }
    ],
  },
  plugins:[
    new ExtractTextPlugin({
      filename:'[name].css',
      allChunks:true
    }),
    new VueLoaderPlugin()
  ],
  resolve:{
    extensions:['.js','.vue']
  }
}