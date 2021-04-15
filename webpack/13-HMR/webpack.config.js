const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 *  HMR:  hot module replacement 热模块替换 / 模块热替换
 *    作用：一个模块发生变化 只会重新打包这个模块
 *         极大提升构建速度
 *          
 *          样式文件：可以使用HMR功能，因为 style-loader 内部实现
 *          js文件：默认不能使用HMR功能
 *          html文件：默认不能使用HMR功能，同时会导致问题：html文件不能热更新
 */

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',

  //  开发服务器 devServer: 用来自动化（自动编译）
  //  特点：只会在内存中编译打包，不会有任何输出
  //  npx webpack-dev-server
  devServer: {
    //  构建后路径
    contentBase: resolve(__dirname, 'build'),
    //  启动gzip压缩
    compress: true,
    //  端口号
    port: 3000,
    //  自动打开浏览器 
    open: true,
    //  开启HMR
    hot: true
  }
}