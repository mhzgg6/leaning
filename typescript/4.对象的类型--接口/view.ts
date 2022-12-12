interface Jack {
  a: string,
  b: string
}
const jack: Jack = {
  a: 'a',
  b: 'b'
}

//  重名 interface 可以合并
interface Alisa { name: string }
interface Alisa { age: number }
var alisa: Alisa = {
  name: 'yj',
  age: 18
}

//  继承
interface Parent { name: string }
interface Child extends Parent { age: number  }
let child = {
  name: 'mhj',
  age: 18
}

//  可选操作符
interface Z {
  name: string,
  age?: number
}

let z: Z = { name: 'z' }

//  任意属性
interface V {
  b?: string,
  a: string,
  [propName: string]: any 
}

//  只读属性
interface M {
  b?: string,
  readonly a: string,
  [propName: string]: any 
}
let m: M = { a: 's' }
// m.a = 'b'
console.log(m, 'm');

//  添加函数
interface BBB {
  cb(): void
}
let bbbf: BBB = {
  cb: () => {

  }
}