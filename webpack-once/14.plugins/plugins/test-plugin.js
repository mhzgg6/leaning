class TestPlugin {
  constructor() {
    console.log("testPlugin constructor")
  }
  // webpack 读取配置时 new TestPlugin() 会执行插件 constructor 方法
  // webpack 创建 compiler 对象
  // 遍历所有插件 调用插件的 apply 方法
  apply(compiler) {
    console.log("testPlugin apply()")

    compiler.hooks.compile.tap("TestPlugin", (compilationParams) => {
      console.log("compiler.compile()")
    })

  }
}

module.exports = TestPlugin