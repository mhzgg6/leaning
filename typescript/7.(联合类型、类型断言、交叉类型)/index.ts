//  联合类型
let myPhone: number | '010-820'
 const fn = (something: number | boolean): boolean => {
  return !!something
 }

//  交叉类型
//  多种类型的集合，联合对象将具有所联合类型的所有成员
interface People {
  age: number,
  height: number
}
interface Man {
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man)
}
xiaoman({ age: 18, height: 180, sex: '男' })


//  类型断言
interface A {
  run: string
}
interface B {
  build: string
}
const fnA = (type: A | B): string => {
  return (type as A).run
}
//  可以使用类型断言来推断他传入的是A接口的值
let res = fnA({ run: 'box' });
console.log(res);

//  使用any临时断言
//  报错 window 上没有abc属性
// window.abc = 123
(window as any).abc = 123

//  as const 
const names = '小满'
// names = 'aa'  
let sex = 'sss' as const
// sex = 'aa'


//  数组
let a1 = [10, 20] as const
const a2 = [10, 20]

// a1.unshift(30) //  错误 此时已断言字面量为[10, 20] 数据无法做任何修改
// a2.unshift(30) //  通过 没有修改指针

console.log(a1);
console.log(a2);



