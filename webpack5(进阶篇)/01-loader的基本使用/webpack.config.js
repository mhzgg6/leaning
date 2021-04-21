const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'loader1',
        options: {
          name: 'mao',
          age: 18
        }
      }
    ]
  },
  //  配置loader解析规则
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  },
  mode: 'production'
}