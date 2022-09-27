//  定义变量不用 通常需要给个默认值
class Person {
  name: string
  age: number
  sex: number = 18
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  run() {

  }
}

//  类的修饰符
//  public private protected
class Animal {
  public name: string
  private age: number
  protected some: any
  constructor(
    name: string,
    age: number,
    some: any
  ) {
    this.name = name
    this.age = age
    this.some = some
  }

  getAge() {
    console.log(this.age);
  }
}
//  public 定义变量可以内外部访问 不写默认为public
//  private 定义变量只能在内部访问 不能再外部访问
//  protected 定义变量只能在内部和继承的子类中访问 不能在外部访问
let pig = new Animal('pig', 12, true)
pig.name
pig.getAge()
// pig.age
class Goat extends Animal {
  constructor () {
    super('goat', 2, false)
    console.log(this.some, '--goat--');
  }

  create() {
    console.log(this.some, '--some--');
  }
}
let goat = new Goat()

//  static 静态属性  静态方法
//  static 定义的属性和函数 不能通过this访问 只能通过类名去调用
//  如果两个函数都是static 是可以相互调用的
class Code {
  static code: string
  constructor() {
    //  console.log(this.nb);  Code上不存在
  }
  static run() {
    this.go()
    console.log('--static--');
  }
  static go() {
    console.log('--go--');
  }
}
console.log(Code.code);
console.log(Code.run());

//  interface 定义类
interface PersonClass {
  get(type: boolean): boolean
} 
interface PersonClass1 {
  set(): void,
  asd: string
}

class A {
  name: string
  constructor() {
    this.name = 'mhz'
  }
}

class B extends A implements PersonClass,PersonClass1 {
  asd: string
  constructor() {
    super()
    this.asd = '123'
  }
  get(type: boolean) { return type }
  set() {}
}

