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
    //  监视 contentBase 目录下的所有文件，变化 => reload
    watchContentBase: true,
    //  启动gzip压缩
    compress: true,
    //  端口号
    port: 3000,
    //  自动打开浏览器 
    open: true,
    //  开启 HRM
    hot: true,
    //  服务器代理
    proxy: {
      //  一旦 devServer（3000）服务器接收到 /api/XXX 的请求时，就会把请求转发到另一个服务器
      '/api': {
        target: 'http://localhost:3000',
        //  发送请求时 请求路径重写 将 api/xxx --> /xxx （去掉/api）
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}