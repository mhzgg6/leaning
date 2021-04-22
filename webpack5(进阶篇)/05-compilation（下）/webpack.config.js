// const Plugin1 = require('./plugins/Plugin1');
// const Plugin2 = require('./plugins/Plugin2');
const CopyWebpackPlugin = require('./plugins/CopyWebpackPlugin');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      from: 'public',
      // to: '.',
      ignore: ['index.html']
    })
  ],
  mode: 'production'
}