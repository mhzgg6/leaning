//  decorator 是一项实验性特征 在未来的版本中可能会发生改变

//  类装饰器
const watch: ClassDecorator = (target: Function) => {
  target.prototype.getParams = <T>(params: T): T => {
    return params
  }
}

@watch
class B {
  constructor() {

  }
}

const b = new B();
// console.log((a as any).getParams('123'));
console.log((<any>b).getParams('123'));
