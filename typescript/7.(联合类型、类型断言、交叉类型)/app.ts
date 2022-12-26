//  联合类型
let mNumber: number | string = '010-820'

//  交叉类型
interface Animal {
  age: number,
  height: number
}
interface Dog {
  name: string
}

const wangcai = (animal: Animal & Dog) => {
  console.log(animal.name);
  console.log(animal.age);
  console.log(animal.height);
}
console.log(2);
wangcai({ name: 'wangcai', age: 5, height: 18 })

//  类型断言
interface A {
  run: string
}
interface B {
  build: string
}

//  警告 B接口上没有定义 run 这个属性
// const fn = (type: A | B): string => {
//   return type.run
// }

const ff = (type: A | B): string => {
  return (type as A).run
}
//  tip:
//      类型断言只能够欺骗 TS 编译器 无法避免运行时的错误 反而滥用类型断言会导致运行时错误

//  使用 any 临时断言
// window.abc = 123
(window as any).abc = 123

