const { validate } = require('schema-utils');
const schema = require('./schema.json');
const globby = require('globby');
const path = require('path');

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
        //  将 from 的资源 复制到 to中去  输出出去
        const { from, ignore } = this.options;
        const to = this.options.to ? this.options.to : '.';
        
        //  1.读取from中的资源
        //  context就是webpack配置
        //  运行指令的目录
        const context = compiler.options.context;
        //  将输入路径变成绝对路径
        const absoluteFrom = path.isAbsolute(from) ? from : path.resolve(context, from);
        //  globby(要处理的文件，options)
        const paths = await globby(absoluteFrom, { ignore });
        console.log(paths);
      })
    })
  }
}

module.exports = CopyWebpackPlugin;