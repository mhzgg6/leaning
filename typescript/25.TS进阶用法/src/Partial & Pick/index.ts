console.log('---');
type Person1 = {
  name: string,
  age: number
}

/**
 * Make all properties in T optional
 * 将 T 中的所有属性设置为可选
 */
// type Partial<T> = {
  //  P = 'name' | 'age'
//   [P in keyof T]?: T[P];
// };

type p = Partial<Person1>
// 结果
// type p = {
//   name?: string | undefined;
//   age?: number | undefined;
// }



/**** Pick ****/
type Animal = {
  name: string,
  age: number,
  sex: boolean
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

type a = Pick<Animal, 'name' | 'sex'>
// type a = {
//   name: string,
//   sex: boolean
// }