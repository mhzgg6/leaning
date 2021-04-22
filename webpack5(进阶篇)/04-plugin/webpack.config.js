const path = require('path');
const Plugin1 = require('./plugins/Plugin1');

module.exports = {
  module: {
    rules: [
    ]
  },
  plugins: [
    new Plugin1()
  ],
  mode: 'production'
}