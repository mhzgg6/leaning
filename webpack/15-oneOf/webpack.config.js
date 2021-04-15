const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssexTractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

//  定义node.js环境变量：决定使用browserslist的那个环境
process.env.NODE_ENV = 'production';

//  复用loader
const commonCssLoader = [
  //  处理css 文件 并单独提取文件
  MiniCssexTractPlugin.loader,
  'css-loader', //  默认配置 => 直接些loader名字   加载配置 => { ... }
  { //  对css进行兼容性处理
    //  还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-preset-env')()
      ]
    }
  }
]

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      //  eslint检测js
      {
        //  在package.json中eslintConfig ==> airbnb
        test: /\.js$/,
        exclude: /node_modules/,
        //  优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          //  是否自动修复代码规范
          fix: true
        }
      },
      {
        //  提升构建速度
        //  使用oneOf 不能有两个配置处理同一种文件类型
        oneOf: [
          //  处理css文件
          {
            test: /\.css$/,
            use: [...commonCssLoader]
          },
          //  处理less文件
          {
            test: /\.less$/,
            use: [...commonCssLoader, 'less-loader']
          },
          /*
          *  正常来讲，一个文件只能被一个loader处理
          *  当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序
          *    先执行eslint
          * 
          */

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
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ]
              ]
            }
          },
          //  处理图片问题
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
              esModule: false
            }
          },
          //  处理html中文件中的图片问题
          {
            test: /\.html$/,
            loaader: 'html-loader'
          },
          //  处理其他文件
          {
            exclude: /\.(js|css|less|html|jpg|png|gif)/,
            loader: 'file-loader',
            options: {
              outputPath: 'other'
            }
          }
        ]
      }
      
    ]
  },
  plugins: [
    new MiniCssexTractPlugin({
      filename: 'css/built.css'
    }),
    //  压缩css代码
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      //  压缩html代码
      minify: {
        //  移除空格
        collapseWhitespace: true,
        //  移除注释
        removeComments: true
      }
    })
  ],
  mode: 'production'  
}