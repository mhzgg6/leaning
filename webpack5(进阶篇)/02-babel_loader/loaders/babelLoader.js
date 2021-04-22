//  loader 本质上是一个函数
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const babel = require('@babel/core');
const util = require('util');

const schema = require('./schema.json');

//  babel.transform => 用来编译代码的方法
//  是一个普通的异步方法
//  util.promisify将普通异步方法转化成基于promise 的异步方法
const transform = util.promisify(babel.transform);

module.exports = function (content, map, meta) {
  //  获取配置
  const options  = getOptions(this) || {};
  //  验证配置
  validate(schema, options, {
    name: 'babelLoader'
  });

  //  创建异步
  const callback = this.async();
  //  使用babel
  transform(content, options)
    .then(({code, map}) => callback(null, code, map, meta))
    .catch((err) => callback(err))

}