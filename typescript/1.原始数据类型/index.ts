// 布尔值
// let isDone: boolean = false
// let createdByNewBoolean: boolean = new Boolean(1)  //  返回 boolean 对象
let createdByNewBoolean: boolean = Boolean(1)

console.log('布尔值', createdByNewBoolean);

/**
 * 数值
*/
let num: number = 6
// es6 二进制
let hex: number = 0xf00d
// es6 十进制
let oct: number = 0o744
let notNumber: number = NaN
let infinityNumber: number = Infinity

console.log('Number', num, hex, oct, notNumber, infinityNumber)
// 6 61453 484 NaN Infinity  二进制和八进制 => 十进制

/**
 * 字符串
*/
let myName: string = 'Tom'
let myAge: number = 25
let sentence: string = `hello, my name is ${myName}`

console.log('String-', sentence)

/**
 * 空值
 *     表示没有任何返回值的函数
*/
function alertName(): void {
  // window.alert('my name is tom')
}
let unusable: void = undefined
let vnull: void = null      //   非严格模式才能赋值 null

console.log(alertName());

/**
 * null or undefined
*/
let u: undefined = undefined
let n: null = null
