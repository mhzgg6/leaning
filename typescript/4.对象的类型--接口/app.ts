interface Person {
  name: string,
  age: number
}

const people: Person = {
  name: 'mhz',
  age: 25
}

//  重名interface 可以合并
interface A { name: string }
interface A { age: number }
var x: A = { name: 'hahha', age: 12 }
//  继承
interface B extends A {
  sex: boolean
}

const q: B = {
  name: 'mhz',
  age: 18,
  sex: true
}

console.log(q);

//  可选属性的含义是该属性可以不存在
interface C {
  name: string,
  age?: number
}
const c: C = { name: 'mhz' }

//  任意属性【propname: string】
//  ****  一旦定义了任意属性，那么确定属性和可选的类型都必须是它的子类
interface Animal {
  name: string,
  age?: number,
  [propname: string]: any
}
const pig = {
  name: 'pig',
  age: 13,
  eat: 13
}

//  只读属性
interface Game {
  readonly name: string
}

const jcc: Game = { name: 'jcc' }
// jcc.name = 'dd'
console.log(jcc);


//  添加函数
interface Blog {
  cb(): void
}
const func: Blog = {
  cb: () => {
    console.log(123);
  }
}
func.cb()
