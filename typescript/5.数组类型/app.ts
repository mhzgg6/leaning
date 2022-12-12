let list: number[] = [1]
let list1: string[] = ['a']
let list2: any[] = ['a', 1, true]

//  泛型
let res: Array<number> = [1, 2]

//  用接口表示数组
interface NumArray {
  [index: number]: number
}
let objArr: NumArray = [1, 2]

//  多维数组
let dataOne: number[][] = [[1,2]]

//  arguments 类数组
function ArrList(...args: any): void {
  console.log(args);
  //  错误定义 arguments 是一个类数组
  let arr: IArguments = args
  console.log(arr);
}
ArrList(1,2,3, 'ss');
//  其中arguments是typescript中定义好的类
interface IArguments {
  [index: number]: any,
  length: number,
  callee: Function
}