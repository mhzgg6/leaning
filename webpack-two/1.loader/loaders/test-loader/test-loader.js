/**
 * test-loader
*/
module.exports  = function (content, map, meta) {
  console.log(content, map, meta)
  return content.replace('main', 'webpack')
}