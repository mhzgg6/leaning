//  元祖类型
//  就是数组的变种
//  是固定数量的不同类型值的集合
let arr: [number, string] = [1, 'string']

let arr2: readonly [number, boolean, string, undefined] = [1, true, '1', undefined]

//  当赋值或访问一个已知索引元素时，会得到正确类型
let arr3: [number, string] = [1, 'arr']
// arr[0].length error 数字没有length
arr[1].length

//  越界元素
let arr5: [number, string] = [4, 'abc']
// 对于越界元素他的类型限制为 联合类型
// arr5.push(true)

let excel: [string, number, string][] = [
  ['a', 1, 'b'],
  ['a', 1, 'b'],
]