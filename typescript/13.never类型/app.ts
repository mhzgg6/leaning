//  Ts 将使用never类型来表示不应该存在的状态

//  返回never的函数必须存在无法到达的终点
//  因为必定抛出异常 所以error将不会有返回值
function error(msg: string): never {
  throw new Error(msg);
}
// error('mhz')
console.log(111);

//  因为存在死循环 所以loop将不会有返回值
function loop(): never {
  while(true) {
  }
}

//  never 与 void 差异
//  void 类型只是没有返回值 但本身不会出错
function Void(): void {
  console.log();
}
//  只会抛出异常没有返回值
function Never(): never {
  throw new Error();
}

interface A {
  type: 'foo'
}
interface B {
  type: 'boo'
}
type All = A | B
function handleVal(val: All) {
  switch (val.type) {
    case 'foo':
      break;
    case 'boo':
      break;
    default:
      const check: never = val
      break;
  }
}