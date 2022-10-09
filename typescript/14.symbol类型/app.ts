//  symbol  类型

//  symbol的值是唯一
const s1 = Symbol();
const s2 = Symbol();
// console.log(s1 === s2);

//  用着对象属性的键
let sym = Symbol();
let obj = {
  [sym]: "value"
}
console.log(obj[sym]);

//  symbol定义的属性 不能通过以下方式拿到
//  for in || Object.keys || getOwnPropertyNames || JSON.stringify
let sym1 = Symbol('mhz');
let sym2 = Symbol('yj');
let obj1 = {
  [sym1]: "小满",
  [sym2]: "二蛋",
  name: 'mhz',
  age: 18
}

//  for in 
for(let key in obj1) {
  console.log(key)//  name value
}
//  Object.key
console.log(Object.keys(obj1));
//  getOwnPropertyNames

