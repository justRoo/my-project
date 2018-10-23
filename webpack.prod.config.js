const uglifyjsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = merge(baseConfig,{
  mode:'production',
  output:{
   path: path.resolve(__dirname,'./dist'),
   filename:'bundls.js'
  },
  plugins:[
   
    new HtmlWebpackPlugin({
      template: './src/main.ejs',
      favicon: './src/images/favicon.png',
      href: '/',
      inject: true,
    })
  ],
  optimization: {
    minimizer: [
        new uglifyjsPlugin({
            uglifyOptions: {
                compress: false
            }
        })
    ]
  },
})