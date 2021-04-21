const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name]_[contenthash:10].js',
    path: resolve(__dirname, 'build'),
    chunkFilename: 'js/[name].[contenthash:10]_chunk.js'
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      // minSize: 30 * 1024, //  分割的chunk最小为30kb
      // maxSize: 0, //  最大没有限制
      // minChunks: 1, //  要提取的chunk最少被引用一次
      // maxAsyncRequests: 5, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequest: 3, //  入口js文件最大并行请求数量
      // automaticNameDelimiter: "~",  //  名称连接符
      // name: true, //  可以使用命名规则
      // cacheGrounps: {// 风格chunk的组
      //   //  node_modules文件会被打包到 venders 组的chunk中。 --> venders~xxx.js
      //   //  满足上面的公共条件: 如： 大小超过30kb
      //   venders: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //   },
      //   default: {
      //     //  要提取的chunk最少被引用两次
      //     minChunks: 2,
      //     //  优先级
      //     priority: -20,
      //     //  如果当前要打包的模块，和之前已经被提取的模块是同一个，就恢复用，而不是重新打包模块
      //     reuseExistingChunk: true
      //   }
      // }
    },
    //  将当前模块的记录其他模块的hash值单独打包为一个文件 runtime
    //  解决：修改a文件导致b文件的contenthash的变化
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      //  配置生成环境的压缩方案 js/css
      new TerserWebpackPlugin({
        //  开启缓存
        cache: true,
        //  开启多进程打包
        parallel: true,
        //  开启sourceMap
        sourceMap: true,
      })
    ]
  }
}