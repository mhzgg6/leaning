/**
 * loader
 *        webpack只能理解 JavaScript/JSON 文件
 *        loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，然后添加到依赖图中
*/

// 同步loader
module.exports = function(content, map, meta) {
  // 第一个参数 err 代表是否有错误 
  // 第二个参数 content 代表处理后的内容
  // 第三个参数 map 代表源码映射
  // 第四个参数 meta 代表自定义数据
  this.callback(null, content, map, meta)
  // 当调用callback时，总是返回undefined
  return
}

// 异步loader
module.exports = function(content, map, meta) {
  const callback = this.async()
  // 异步处理
  setTimeout(() => {
    callback(null, content, map, meta)
  }, 1000)
}
// 建议使用异步loader，因为同步loader会导致阻塞，影响打包速度

// raw-loader
module.exports = function(content) {
  return content
}
module.exports.raw = true
// 默认情况下，loader是把loader处理后的结果作为字符串，注入到模块中，但是loader也可以返回buffer，这样webpack才能识别buffer
// 告诉webpack，loader返回的是buffer

// pitching-loader
module.exports = function(content) {
  return content
}
module.exports.pitch = function(remainingRequest, previousRequest, data) {
  // remainingRequest 是当前loader处理前的loader的请求
  // previousRequest 是当前loader处理前的loader的请求
  // data 是loader之间传递的数据
  // 可以通过data传递数据给下一个loader
  // data.a = 1
}
// pitch loader 会先从左到右执行loader链中的pitch方法，然后再从右到左执行loader链中loader方法

