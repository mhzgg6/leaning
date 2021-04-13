const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//  设置node.js环境变量
process.env.NODE_ENV = 'development';

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //  创建style标签 将样式放入
          // 'style-loader',
          //  这个loader取代style-loader, 作用：提取js中的css成单独文件
          MiniCssExtractPlugin.loader,
          //  将css整合到js文件中
          'css-loader',
          /*
           *  css兼容性处理：postcss => postcss-loader postcss-preset-env
           *
           *  帮postcss找到package.json中 browserslist 里面的配置，通过配置加载指定的css兼容样式  
           * 
           * 
           * 
           * "browserslist": {
           *    //  生成环境 => 
                "development": [
                  "last 1 chrome version",
                  "last 1 firefox version",
                  "last 1 safari version"
                ],
                //  生成环境  => 默认是看生成环境
                "production": [
                  ">0.2%",
                  "not dead",
                  "not op_mini all"
                ]
              }  
            *
            *
            * 
           */
          //  使用loader的默认配置 => postcss-loader
          //  修改loader的配置
          {
            loader: 'postcss-loader',
            options: {
              // ident: 'postcss',
              // plugins: [
              //   //  postcss 插件
              //   require('postcss-preset-env')()
              // ]
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      //  对文件进行重命名
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}