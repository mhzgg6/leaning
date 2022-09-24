let arr: number[] = [1, 2, 3]
//  操作方法添加也是不允许的
// arr.unshift('1')

let arr1: number[] = [1, 2, 3, 4]
let arr2: string[] = ['a', 'b', 'c', 'd']
let arr3: any[] = [1, '1', true]
console.log(arr1, arr2, arr3);

//  数组泛型
let arr4: Array<number> = [1, 2, 3]
let arr5: Array<string> = ['a','b','c']

//  用接口表示数组
interface NumberArray {
  [index: number]: number
}
let interArr: NumberArray = [1, 2]

//  多维数组
let data: number[][] = [[1, 2], [1, 2]]
let data1: Array<Array<number>> = [[1, 2], [1, 2]]

console.log(data, data1, '--');

//  arguments类数组
function Arr(...args: any): void {
  console.log(arguments, 'args');
}
Arr(1, 2, 3)

//  其中 IArguments 是 TS 中定义好的类型，
interface IArguments {
  [index: number]: any,
  length: number,
  callee: Function
}


