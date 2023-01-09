//  数字枚举 
//  默认从 0 开始 递增加 1
enum Foods {
  Red,
  Green,
  Blue
}
console.log(Foods.Red); // 0
console.log(Foods.Green); // 1
console.log(Foods.Blue); // 2


// 增长枚举
enum Sun {
  Red = 1,
  Green,
  Blue
}
console.log(Sun.Red); // 1
console.log(Sun.Green); // 2
console.log(Sun.Blue); // 3


//  字符串枚举
enum Animal {
  Cat = 'daju',
  Dog = 'wangcai'
}
console.log(Animal.Cat);
console.log(Animal.Dog);


//  异构枚举
enum Dog {
  name = 'hh',
  age = 2
}


//  接口枚举
enum Person {
  name,
  age
}
interface H {
  red: Person.name
}
let Mhz: H = {
  // red: Person.name
  red: 5
}