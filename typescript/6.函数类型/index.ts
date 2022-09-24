//  函数类型
// const fn = (name: string, age: number): string => {
//   return name + age
// }
// let res = fn('mhz', 18)
// console.log(res);

//  可选类型
//  可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
const fn = (name: string, age?: number): string => {
  return name + age
}
let res = fn('mhz')//  mhzundefined
console.log(res);

//  函数参数默认值
const getInfo = (name: string = '我是默认值'): string => {
  return name
}
let myName = getInfo()
console.log(myName);


//  接口定义函数
interface User {
  name: string,
  age: number
}
function getUserInfo(user: User): User {
  return user
} 
let mhz = getUserInfo({name: 'mhz', age: 15})
console.log(mhz);


//  重载
//      允许一个函数接收不同数量或类型的参数时
function reverse(x: number): number           //  函数定义
function reverse(x: string): string           //  函数定义
function reverse(x: number | string): any {   //  函数实现
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
} 
let result = reverse(123)
let word = reverse('abc')
console.log(result, word);

