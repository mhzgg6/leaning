//  定义一个类型 如果是数组类型 就返回 数组元素的类型 否则 就传入什么类型 就返回什么类型
type P<T> = T extends Array<T> ? T[number] : T
type A = P<(string)>[]

let arr: A = ['aaa']

type InF<T> = T extends Array<infer U> ? U : T
type B = InF<number>[]

let arr1: B = [2] 


//  infer 类型提取

//  1.提取头部元素
type Num = ['a', 'b', "c"]
type First<T extends any[]> = T extends [infer First, ...any] ? First : []


//  infer 递归
type s = [1, 2, 3, 4]
//  ? [4,3,2,1]
type reveArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...reveArr<rest>, First] : T
type m = reveArr<s>
