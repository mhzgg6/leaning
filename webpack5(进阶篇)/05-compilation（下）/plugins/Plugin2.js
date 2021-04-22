const fs = require("fs");
const util = require("util");
const path = require("path");
const webpack = require('webpack');
const { RawSource } = webpack.sources;
//  将 fs.readFile 方法变成基于 promise 风格的异步方法
const readFile = util.promisify(fs.readFile);

class Plugin2 {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('Plugin2', (compilation) => {
      compilation.hooks.additionalAssets.tapAsync('plugin2', async (cb) => {
        const content = 'hello world';


      })
    })
  }
}

module.exports = Plugin2;