let a: string = 'aaaa'
let b: string = `bbbb${a}`

console.log(a);
console.log(b);




//  数字类型
let notNum: number = NaN;
let num1: number = 123;
let infinityNumber1: number = Infinity
let decimal: number =  6  //十进制
let hex1: number = 0xf00d   //十六进制
let binary: number = 0b1010   //二进制
let octal: number = 0o744   //八进制




//  布尔类型
// let createBoolean: boolean = new Boolean(1)
//  报错 new Boolean() 返回的是一个 Bool

let createBoo: boolean = true 
let createBoo1: boolean = Boolean(1) 




//  空值类型
function voidFn(): void {
  console.log('test void');
}




//  void也可以定义undefined和null类型
let u1: void = undefined
let n1: void = null




//  null 和 undefined 类型
let un1: undefined = undefined
let nu1: null = null
//  与 void 区别，undefined 和 null 是所有类型的子类型，
let name1: string = undefined

let test: null = null
let num2: string = '2'
num2 = test;

let test1: undefined = undefined
let num3: string = '2'
num2 = test1;
// tip>: 严格模式 null 不能赋予void