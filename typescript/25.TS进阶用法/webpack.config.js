const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/Record & Readonly/index.ts",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  devServer: {
    port: '1998'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  mode: 'development'
}