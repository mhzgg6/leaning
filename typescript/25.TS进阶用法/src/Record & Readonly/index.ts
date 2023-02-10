/**
 * Make all properties in T readonly
 */
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

type Food = {
  name: string,
  price: number
}

type f = Readonly<Food>
// f = {
//   readonly name: string,
//   readonly price: number
// }


// Record
//  同时约束 属性 和 值
//  定义一个对象的 key 和 value 类型
/**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
type Food1 = {
  name: string,
  price: number
}
type f1 = Record<"name", Food1>
let apple: f1 = {
  name: { name: 'apple', price: 12 }
}