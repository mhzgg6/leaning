module.exports = function cleanLogLoader(content) {
  console.log('hello')
  return content.replace(/console\.log\(.*\);?/g, "")
}