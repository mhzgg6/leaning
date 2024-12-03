const schema = require("./index.json");
const babel = require("@babel/core")

module.exports = function (content) {
  const options = this.getOptions(schema)
  const callback = this.async()

  babel.transform(content, options, function(err, result) {
    callback(err, result.code)
  })
}