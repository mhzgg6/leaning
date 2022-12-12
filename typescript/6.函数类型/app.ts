//  函数类型
const fn1 = (name: string, age: number): string => {
  console.log(name + age);
  return name + age
}
fn1('毛啊:', 18)

//  可选参数 默认值
const fn2 = (name: string, age: number = 18): string => {
  return name + ':' + age
}
let alisa = fn2('alisa')
console.log(alisa)

//  接口定义函数
interface AddFn {
  (num: number, num1: number): number
}
const fn3: AddFn = (num: number, num1: number): number => {
  return num + num1
}
let sum = fn3(5, 5)
console.log(sum);

interface User {
  name: string,
  age: number
}
function getRes(user: User): User {
  return user
}

//  定义剩余参数
const fn4 = (array: number[], ...items: any[]): any[] => {
  console.log(array, items);
  return items
}
let a: number[] = [1,2,3]
let res4 = fn4(a, 'a', 'b', true)
console.log(res4);

//  函数重载