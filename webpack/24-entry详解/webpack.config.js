const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 *  entry:  入口文件
 *      1.  string --> './src/js/index.js'
 *          打包形成一个chunk，输出一个bundle文件
 *      2.  array
 *          多入口
 *          有几个入口文件最终会形成一个chunk，输出去只有一个bundle文件
 *            -->   只有在HMR功能中让html热更新生效
 *      3.  object
 *          多入口
 *          有几个入口文件就会生成几个chunk，输出几个bundle文件
 *          此时chunk的名称是key
 *      
 *          --> 特殊用法
 *          {
 *            //  
 *            index: ['./src/js/index.js', './src/js/test.js'],
 *            add: ['./add.js]
 *          }
 */

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
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: 'production',
}