//  数字枚举
//  默认从 0 开始，依次累加
enum Types {
  Red,
  Green,
  blue
}
// console.log(Types.Red);

//  增长枚举
enum Color {
  red = 1,
  green,
  blue
}
console.log(Color.red);
console.log(Color.green);
console.log(Color.blue);

//  字符串枚举
//  没有自增长的能力 
enum Str {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
console.log(Str.Red);
console.log(Str.Green);
console.log(Str.Blue);

//  异构枚举
//  枚举可以混合字符串和数字成员
enum A {
  Yes = 1,
  No = 'No'
}

//  接口枚举
enum B {
  yyds,
  dddd
}
interface C {
  red: B.yyds
}
let obj:C = {
  red: B.yyds
}

//  const 枚举
//  大多数情况下 枚举是十分有效的方案
//  为了避免在额外生产的代码上的开销和额外的非直接的对枚举成员的访问
//  const 声明的枚举会被编译成常量
//  普通声明的枚举编译完后是个对象
const enum D {
  Yes = 'Yes',
  No = 'No'
}
console.log(D.Yes);
console.log(D.No);
// console.log("Yes" /* D.Yes */);
// console.log("No" /* D.No */);

enum E {
  Yes = 'Yes',
  No = 'No'
}
console.log(E.Yes);
console.log(E.No);
// var E;
// (function (E) {
//     E["Yes"] = "Yes";
//     E["No"] = "No";
// })(E || (E = {}));
// console.log(E.Yes);
// console.log(E.No);

//  反向映射
//  正向映射 (name -> value)
//  反向映射 (value -> name)
enum F {
  fall
}
let fall = F.fall
console.log(fall); /* 0 */
let nameOfF = F[fall]
console.log(nameOfF); /* fall */
