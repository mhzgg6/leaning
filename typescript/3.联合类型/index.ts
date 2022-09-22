let obj: string | number = 6

console.log(obj);


/**
 * 当typescript不确定一个联合类型的变量到底是哪个类型时，我们 只能访问此联合类型的所有类型里共有的属性或方法
*/

// return something.length  //  length 不是 string 和 number 的共有属性
function getString(something: string | number): string {
  return something.toString()
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则退出一个类型
let myName: string | number;
myName = 'sss'
console.log(myName.length);
myName = 7
console.log(myName.lenght);

