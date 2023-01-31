//  ts 与 ECMAScript2015 一样 任何包含顶级 import 或者 export 的文件都被当成一个模块
//  反之，如果一个文件不带有顶级的 import 或者 export 声明，那么它的内容被视为全局可见

import { M } from "./index2"
namespace a {
  export const Time: number = 1000
  export const fn = <T>(arg: T): T => {
    return arg
  }
  fn(Time)
}
namespace b {
  export const Time: number = 1000
  export const fn = <T>(arg: T): T => {
    return arg
  }
  fn(Time)
}
console.log(a.Time);
console.log(b.Time);

//  嵌套命名空间
namespace a {
  export namespace b {
    export class Vue {
      parameters: string
      constructor(parameters: string) {
        this.parameters = parameters
      }
    }
  }
}
let v = a.b.Vue
console.log(new v('mzh'));

//  抽离命名空间
console.log(M);

//  简化命名空间
namespace D {
  export namespace F {
    export const c = 1
  }
}
import C = D.F
console.log(C.c);
