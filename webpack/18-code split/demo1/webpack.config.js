const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //  单入口
  // entry: './src/js/index.js',
  //  多入口
  entry: {
    main: './src/js/index.js',
    test: './src/js/test.js'
  },
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
  ],
  mode: 'production',
}