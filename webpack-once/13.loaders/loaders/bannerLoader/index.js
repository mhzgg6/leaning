const schema = require("./schema.json")

module.exports = function (content) {
  // 获取loader的options 
  const options = this.getOptions(schema)

  const prefix = `
    /**
     * Author: ${options.author}
    */
  `

  return `${prefix} \n ${content}`
}