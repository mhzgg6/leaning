//  函数泛型
function num(a: number, b: number) : Array<number> {
  return [a, b]
}
console.log(num(1, 2));
function str(a: string, b: string) : Array<string> {
  return [a, b]
}
console.log(str('a', 'b'));

//  泛型优化
function Add<T>(a: T, b: T) :Array<T> {
  return [a, b]
}
let strArr = Add<string>('mhz', 'yj')
let numArr = Add<number>(1, 2)
console.log(strArr, numArr);
//  不同泛型参数
function Sub<T, U>(a: T, b: U) :Array<T | U> {
  const params: Array<T|U> = [a, b]
  return params
}
let mixArr = Sub<Boolean, number>(false, 1)
console.log(mixArr);

//  定义泛型接口
interface MyInter<T> {
  (arg: T): T
}
function fn<T>(arg: T): T {
  return arg
}
let res: MyInter<number> = fn
console.log(res(123));
//  对象字面量泛型
let foo: { <T>(arg: T): T }
foo = function <T>(arg: T): T {
  return arg
}
console.log(foo(123));


//  泛型约束
//  我们期待在一个泛型的变量上 获取length 但是 有的数据类型没有 length 属性
// function getLen<T>(arg: T) {
//   return arg.length //  类型“T”上不存在属性“length”
// }
interface Len {
  length: number
}
function getLen<T extends Len>(arg: T) {
  return arg.length 
}
console.log(getLen('abcde'));
