const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js"
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   loader: path.resolve(__dirname, "./loaders/cssLoader/index.js")
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        // loader: path.resolve(__dirname, "./loaders/clean-log-loader.js")
        use: [
          {
            loader: path.resolve(__dirname, "./loaders/babelLoader/index.js"),
            options: {
              presets: ["@babel/preset-env"]
            }
          },
          {
            loader: path.resolve(__dirname, "./loaders/bannerLoader/index.js"),
            options: {
              author: "mhz"
            }
          }
        ]
        // loader: path.resolve(__dirname, "./loaders/bannerLoader/index.js"),
        // options: {
        //   author: "mhz"
        // }

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html")
    })
  ],
  mode: "development"
}