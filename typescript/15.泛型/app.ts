//  函数泛型
function num (a: number, b: number): Array<number> {
  return [a, b]
}
function str (a: string, b: string): Array<string> {
  return [a, b]
}
console.log(num(1, 2));
console.log(str('ab', 'cd'));

//  泛型优化
function Add<T>(a: T, b: T): Array<T> {
  return [a, b]
}
console.log(Add(3, 4));
console.log(Add('mhz', 'hh'));

//  不同泛型参数名
function Sub<T, U>(a: T, b: U):Array<T | U> {
  const arr: Array<T|U> = [a,b]
  return arr
}
// Sub<number, boolean>  不写也可以 ts自动类型推断
console.log(Sub(1, false));

//  定义泛型接口
interface MyInter<T> {
  (arg: T): T
}
function fn<T>(arg: T): T {
  return arg
}
let result: MyInter<number> = fn
console.log(result(1234));

//  泛型约束
// function getLength<T>(arg: T) {
//   报错 类型“T”上不存在属性“length”
//   return arg.length
// }
//  使用泛型约束，约束其具有length属性的类型
interface Len {
  length: number
}
function getLength<T extends Len>(arg: T) {
  return arg.length
}
let len = getLength<string>('123')
console.log(len);


//  使用keyof约束对象
let obj = { a: 1, b: 2, c: 3 }
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
console.log(prop(obj, 'a'));

//  泛类型
class SubTitle<T> {
  attr: T[] = [];
  add(a: T): T[] {
    return [a]
  }
}

let s = new SubTitle<number>()
s.attr = [1, 2, 3]
s.add(123)
console.log(s.add(123));

let ddd = new SubTitle<string>()
ddd.attr = ['a', 'b', 'c']
console.log(ddd);
