//  loader 本质上是一个函数
const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const schema = require('./schema.json');

module.exports = function (content, map, meta) {
  //  获取配置
  const options  = getOptions(this);
  //  验证配置
  validate(schema, options, {
    name: '当前loader: loader1'
  });
  console.log(111, options);

  console.log(content);
  return content;
}

//  异步loader
// module.exports = function (content, map, meta) {
//   const callback = this.async();
//   setTimeout(() => {
//     callback(null, content);
//   },1000)
// }