type Person = {
  name: string,
  age: number,
  text: string
}

const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key)
}

const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log(`get key=======>${key}`);
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log(`set key=======>${key}-${value}`);
      return Reflect.set(target, prop, value, receiver)
    }
  })
}
let man: Person = logAccess({
  name: 'mhz',
  age: 18,
  text: 'ssss'
}, 'age')
man.age = 30
console.log(man.age);
