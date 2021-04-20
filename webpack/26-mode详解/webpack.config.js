const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    //  文件名称（指定名称 + 目录）
    filename: 'js/[name].js',
    /** 输出文件目录（将来所有资源输出的公共目录） */
    path: resolve(__dirname, 'build'),
    /** 所有资源引入公共路径前缀 --> 'img/a.jpg' --> '/img/a.jpg' */
    // publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js',  /** 非入口chunk的名称 */
    /** 整个库向外暴露的变量名 */
    library: '[name]',
    /** 变量名添加到哪里 [window|global] */
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        /** 排除node_modules */
        exclude: '/node_modules/',
        /** 只检查src下的文件 */
        include: resolve(__dirname, 'src'),
        /** 优先/延后 执行 [pre/post] */
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {}
      },
      {
        /** 以下配置只会生效一个 */
        oneOf: [

        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: 'development',
}