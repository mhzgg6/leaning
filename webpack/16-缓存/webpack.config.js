const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

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
        use: [
          {
            /*
             *  开启多进程打包
             *  进程启动大概为600ms，进程通宵也有开销
             *  只有工作消耗时间比较长，才需要多进程打包
             */
            loader: 'thread-loader',
            options: {
              works: 2
            }
          },
          {
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
          }
        ]
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