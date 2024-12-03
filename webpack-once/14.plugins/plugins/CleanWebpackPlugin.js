class CleanWebpackPlugin {
  apply(compiler) {
    const fs = compiler.outputFileSystem
    compiler.hooks.emit.tapAsync("CleanWebpackPlugin", (Compilation, callback) => {
      const outputPath = compiler.options.output.path
      const err = this.removeFiles(fs, outputPath)
      // 执行成功err为undefined 执行失败err就是错误原因
      callback(err)
    })
  }
  
  removeFiles(fs, path) {
    try {
      const files = fs.readdirSync(path)
      console.log(files, 'files')

      // 遍历文件
      files.forEach((file) => {
        const filePath = `${path}/${file}`
        // 分析文件
        const fileStat = fs.statSync(filePath)
        // 判断是否是文件夹
        if (fileStat.isDirectory()) {
          this.removeFiles(fs, filePath)
        } else {
          // 不是文件夹 直接删除
          fs.unlinkSync(filePath)
        }
      })

      // 最后删除当前目录
      fs.rmdirSync(path)
    } catch (error) {
      return error
    }
  }
}

module.exports = CleanWebpackPlugin