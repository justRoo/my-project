const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(baseConfig,{
  mode:'development',
  output:{
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback:true,
    contentBase: './src',
    host:'localhost',
    port:8888,
    hot:true,
    open:false,
    overlay:{
      warnings:true,
      errors:true
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/main.ejs',
      favicon: './src/images/favicon.png',
      href: '/',
      inject: true,
    })
  ]
})