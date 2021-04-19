const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  //  单入口
  entry: './src/js/index.js',
  //  多入口
  // entry: {
  //   main: './src/js/index.js',
  //   test: './src/js/test.js'
  // },
  output: {
    //  name: 取文件名
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //  告诉 webpack 哪些库不参与打包，同时使用的名称也得变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/mainfest.json')
    }),
    //  将某个文件打包输出去 并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js')
    })
  ],
  mode: 'production',
}