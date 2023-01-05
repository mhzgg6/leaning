class Robot {
  //  声明变量
  //  声明之后 不用 需要给默认值 
  name: string
  age: number
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
}

//  类的修饰符
//  public private protected
class Food {
  //  public 内外部都可以访问 不写 默认public
  public name: string
  //  private 私有变量 只能在内部访问
  private age: number
  //  protected 只能在内部和继承的子类中访问
  protected some: any
  constructor (name: string, age: number, some: any) {
    this.name = name
    this.age = age
    this.some = some
  }
}
let rice = new Food('rice', 1, 1)
console.log(rice);
// console.log(rice.age);

class Fish extends Food {
  constructor () {
    super('fish', 2, 2)
    console.log(this.some);
  }
  create() {
    console.log(this.some);
  }
}
let fish = new Fish()
fish.create()

class Fruit {
  public name: string
  private sex: boolean
  protected some: any
  static nb: string = 'nb'
  constructor (name: string, sex: boolean, some: any) {
    this.name = name
    this.sex = sex
    this.some = some
  }

  //  两个函数都是 static 静态的是可以通过 this 互相调用的 
  static run() {
    return this.start()
  }
  static start() {
    return 'run'
  }
}
console.log(Fruit.nb);
console.log(Fruit.run());

interface PersonClass {
  get(type: boolean): boolean
}

interface PersonClass2{
  set(): void,
  name: string
}

class AA {
  name: string
  constructor(name: string) {
    this.name = '123'
  }
}