const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const BannerWebpackPlugin = require("./plugins/bannerWebpackPlugin")
// const CleanWebpackPlugin = require("./plugins/CleanWebpackPlugin")
const AnalyzeWebpackPlugin = require("./plugins/AnalyzeWebpackPlugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js"
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    // new BannerWebpackPlugin({
    //   author: 'mhz'
    // }),
    // new CleanWebpackPlugin(),
    new AnalyzeWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    })
  ],
  mode: "development"
}