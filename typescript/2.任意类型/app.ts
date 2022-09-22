let anys:any = 123
anys = '123'
anys = true

//  声明变量的时候没有指定任意类型 默认为 any
//  缺点 失去了TS类型检测的作用
let sen;
sen = 123
sen = 'aaa'

//  TS 3.0 引入的unknown类型 与any一样，所有类型都可以分配给unknown
//  unknown 类型比 any 更加严格
let value: unknown;
value = true
value = 42
value = "hello"
value = []
value = {}
value = undefined
value = null
value = Symbol('type')

//  unknown 类型不能作为子类型只能作为父类型 any可以作为子类型和父类型
//  unknown 类型不能赋值给其他类型
let name1: unknown = 123
// let name2: string = name1

let name3: any = 123
let name4: string = name3

//  unknown 可赋值的对象只有 unknown/any
let bbb: unknown = 123
let aaa: any = 'aaa'

aaa = bbb
console.log(aaa);


//  如果是 any 类型在对象没有这个属性的时候获取不会报错
let obj: any = { b: 1 }
obj.a
console.log(obj.a);

//  unknown 是不能调用属性和方法
// let ddd: unknown = { b: 1 }
// ddd.b


