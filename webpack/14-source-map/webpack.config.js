const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 *  source-map: 一种提供 源代码 到构建后代码映射技术  
 *              如果构建后代码出错了 通过映射可以追踪源代码错误
 *  
 *    [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
 *    
 *    source-map：外部
 *      错误代码准确信息 和源代码的错误位置
 * 
 *    inline-source-map: 内联
 *      只生成一个内联source-map
 *      错误代码准确信息 和源代码的错误位置
 * 
 *    hidden-source-map: 外部
 *      错误代码 错误位置
 *      不能追踪到源代码错误 只能提示到构建后的错误位置
 * 
 *    eval-source-map: 内联
 *      每一个文件都生成对应的source-map，都在eval
 *       错误代码准确信息 和源代码的错误位置
 * 
 *    nosources-source-map: 外部
 *      错误代码准确信息 但是没有任何源代码信息
 * 
 *    cheap-source-map: 外部
 *      错误代码准确信息 和源代码的错误位置
 *      之精确到行
 *    
 *    cheap-module-source-map: 外部
 *      错误代码准确信息 和源代码的错误位置
 *  
 *    开发环境：速度快 调试更友好
 *        速度快（eval>inline>cheap）
 *           eval-cheap-source-map
 *           eval-source-map
 *        调试更友好
 *           source-map
 *           cheap-module-source-map
 *           cheap-source-map
 *      
 *        =>  eval-source-map / eval-cheap-source-map
 *    
 *    生成环境：源代码是否隐藏 调试要不要更友好
 *      内联会让体积变大 
 *      nosources-source-map 
 *      hidden-source-map
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
    open: true
  },
  devtool: 'nosources-source-map'
}