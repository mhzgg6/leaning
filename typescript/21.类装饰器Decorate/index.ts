//  decorator 是一项实验性特征 在未来的版本中可能会发生改变

//  类装饰器
const watcher: ClassDecorator = (target: Function) => {
  target.prototype.getParams = <T>(params: T): T => {
    return params
  }
}

@watcher
class A {
  constructor() {

  }
}

const a = new A();
// console.log((a as any).getParams('123'));
console.log((<any>a).getParams('123'));
