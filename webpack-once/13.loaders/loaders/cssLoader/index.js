module.exports = async function (content) {
  const callback = this.async()
  let newContent = content
  try {
    newContent = await getImport(this, this.resourcePath, content)
    callback(null, `module.exports = ${JSON.stringify(newContent)}`)
  } catch (error) {
    callback(error, '')
  }
}

const path = require("path")
const fs = require("fs")
const { log } = require("neo-async")
// 匹配图片
const urlReg = /url\(['|"](.*)['|"]\)/g
// 匹配@import关键字
const importReg = /(@import ['"](.*)['"];?)/

async function getImport(context, originPath, content) {
  console.log(context)
  //originPath => D:\leaning\webpack-once\13.loaders\src\css\index.css
  let newContent = content
  let regRes, imgRes
  // 获取当前处理文件的父目录
  // let absolutePath = originPath.
}