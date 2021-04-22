class Plugin2 {
  apply(compiler) {
    compiler.hooks.thisComilation.tap('Plugin2', (compilation) => {
      
    })
  }
}

module.exports = Plugin2;