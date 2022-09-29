//  类型推论
//  声明变量没有定义类型 ts会推测出类型
let str = 'mhz'
// str = 1  不能将 number 分配给 string

//  声明变量既没有声明类型也没有赋值 ts推断成any类型
let b
b = 1
b = 'mhz'


