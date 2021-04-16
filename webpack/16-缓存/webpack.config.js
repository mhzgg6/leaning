const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

/*
 *  缓存：
 *      babel缓存
 *        cacheDirectory: true
 *      文件资源缓存
 *        hash：每次webpack构建时会生成一个唯一的hash值 
 *          问题：因为js和css同时使用一个hash值
 *            如果重新打包，会导致所有缓存失效 => 可我却只改了一个文件
 *        chunkhash:根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
 *          问题：js和css的hash值还是一样的
 *            因为css是在js中杯引入的，所以同属于一个chunk
 *        contenthash：根据文件的内容生成hash值。不同文件hash值不一样
 */

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     //  自动修复eslint错误
      //     fix: true,
      //     //  开启babel缓存
      //     cacheDirectory: true
      //   }
      // }
      //  处理js代码兼容性问题
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                //  注意版本过高问题
                corejs: { version: 2 },
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ],
          cacheDirectory: true
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      //  对文件进行重命名
      filename: 'css/built.[contenthash:10].css'
    }),
    //  压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'production',
  devtool: 'source-map'
}