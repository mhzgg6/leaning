const { resolve } = require("path")

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
        use: [//  顺序：从下到上 从右到左
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [//  顺序：从下到上 从右到左
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [

  ],
  mode: 'development'
}