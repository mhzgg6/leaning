const { validate } = require('schema-utils');
const schema = require('./schema.json');

class CopyWebpackPlugin {
  constructor(options = {}) {
    //  验证options是否合法
    validate(schema, options, {
      name: 'CopyWebpackPlugin'
    })

    this.options = options;
  }

  apply(compiler) {
    //  初始化 compilation
    compiler.hooks.thisCompilation.tap('CopyWebpackPlugin', (compilation) => {
      //  添加资源的hooks
      compilation.hooks.additionalAssets.tapAsync('CopyWebpackPlugin', async (cb) => {
        const content = 'hello world';

      })
    })
  }
}

module.exports = CopyWebpackPlugin;