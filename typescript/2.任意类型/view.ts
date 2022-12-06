//  any 类型和 unknown 顶级类型

//  不需要类型检查
let any: any = 123
any = 'abc'
any = true

//  声明变量的时候没有指定类型 默认为any
let way;
way = 123
way = 'abc'




//  弊端如果使用 any 就失去了 TS 类型检测的作用
//  TS 3.0 中引入的 unknown 类型也被认为是 top type  但它更安全
//  与 any 一样 所有类型都可以分配给 unknown
//  unknown 类型比 any 类型更加严格
let val: unknown;
val = true
val = 42
val = 'hello world'
val = []
val = {}
val = undefined
val = null
val = Symbol('type')

//  unknown 类型不能作为子类型 只能作为父类型 
//  any     可以作为父类型和子类型
// let names: unknown = '123'
// let name2: string = names

let age: any = 123
let age2: number = age

//  unknown 可赋值对象只有 unknown 和 any
let jj: unknown = '123'
let kk: any = '123'
kk = jj

//  区别2
//  any 类型在对象没有这个属性的时候 获取不会报错
let mhz: any = { age: 18 }
mhz.name

//  unknown 是不能调用属性和方法
let yj: unknown = { b: 1, ccc: (): number => 123 } 
// yj.b
// yj.ccc()