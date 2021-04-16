const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

/*
 *  tree shaking(树摇)：去除无用代码
 *    前提：1.必须使用es模块化 2.开启prodoution环境
 *    作用：减少代码体积
 *  
 *  在package.json中配置
 *    "sideEffects": false  所有代码都没有副作用（都可以进行tree shaking）
 *      问题：可能会把css / @babl/polyfill (副作用) 文件都干掉
 *    "sideEffects": ["*.css", "*.less"]
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