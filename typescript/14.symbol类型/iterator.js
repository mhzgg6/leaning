//  javascript 原有表示'集合'的数据结构 主要是数组（array）和对象（Object）
//  Es6 又添加了Map和Set

/**
 * Iterator(遍历器)
 *    - 为各种数据结构，提供一个统一的、简便的访问接口
 *    - 使得数据结构的成员能够按照某种次序排列 
 *    - ES6创造了一种新的便利命令for...of循环，Iterator接口主要提供for...of消费
*/

var it = makeIterator(['a', 'b'])
console.log(it.next())
console.log(it.next())
console.log(it.next())

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        { value: array[nextIndex++], done: false } :
        { value: undefined, done: true }
    }
  }
}