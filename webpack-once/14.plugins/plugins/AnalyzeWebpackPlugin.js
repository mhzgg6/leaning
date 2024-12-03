class AnalyzeWebpackPlugin {
  apply(compiler) {
    // emit是异步串行钩子
    compiler.hooks.emit.tap('AnalyzeWebpackPlugin', (compilation) => {
      const asset = Object.entries(compilation.assets)
      let source = "# 分析打包资源大小 \n| 名称 | 大小 |\n| --- | --- |"
      asset.forEach(([filename, file]) => {
        source += `\n| ${filename} | ${file.size()} |`
      })

      // 添加资源
      compilation.assets["analyze.md"] = {
        source() {
          return source
        },
        size() {
          return source.length
        }
      }
    })
  }
}

module.exports = AnalyzeWebpackPlugin