const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    open: true
  }
}