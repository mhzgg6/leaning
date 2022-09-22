// function printLabel(labelObj: { label: string }) {
//   console.log(labelObj.label)
// }

// let myObj = { size: 10, label: '标签' }
// printLabel(myObj)

interface LabelledValue {
  label: string
}
function printLabel(labelObj: LabelledValue) {
  console.log(labelObj.label)
}
/**
 * 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
 * 
 * 
 * */
let myObj = { size: 10, label: '标签' }
printLabel(myObj)

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) { newSquare.color = config.color }
  if (config.width) { newSquare.area = config.width * config.width }
  return newSquare;
} 


//  只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 10 }
// p1.x = 5 //  Cannot assign to 'x' because it is a read-only property

interface Person {
  name: string;
  age: number;
}

//  变量的形状必须和接口的形状保持一致
let tom: Person = {
  name: 'mhz',
  age: 15
}

/**************  可选属性  ***************/
interface Animal {
  name: string;
  eat?: string;
}

//  可选属性的含义是该属性可以不存在
//  仍然不允许添加未定义的属性
let goat: Animal = { name: 'ele' }

/**************  可选属性  ***************/





/**************  任意属性  ***************/
interface People {
  name: string;
  age?: number;
  [propName: string]: any; 
}

let mhz: People = {
  name: 'mhz',
  gender: 'male'
}