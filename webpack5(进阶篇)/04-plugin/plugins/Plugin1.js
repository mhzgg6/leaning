class Plugin1 {
  apply(complier) {
    //  输出 asset 到 output 目录之前执行 tapAsync tapPromise
    complier.hooks.emit.tap('Plugin1', (compilation) => {
      console.log('emit tap 111');
    })

    complier.hooks.afterEmit.tap('Plugin1', (compilation) => {
      console.log('afteremit tap 111');
    })
  }
}

module.exports = Plugin1;