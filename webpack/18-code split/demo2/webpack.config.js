const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/js/index.js',
  enter: {
    main: './src/js/index.js',
    test: './src/js/test.js'
  },
  output: {
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
  /*
   *  1.可以将node_modules中代码单独打包成一个chunk 最终输出
   *
   *  2.自动分析多入口chunk中，有没有公共的文件。如果有会单独打包成一个chunk
   */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
}