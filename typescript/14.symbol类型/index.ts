var arr = [1, 2, 3, 4]
let iterator = arr[Symbol.iterator]();
console.log(iterator);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // { value: undefined, done: true }

interface Item {
  age: number,
  name: string
}
const array: Array<Item> = [
  { name: 'mhz', age: 18 },
  { name: 'yj', age: 18 },
]

type mapTypes = string | number
const map: Map<mapTypes, mapTypes> = new Map()
map.set('1','mhz')
map.set('2','乖乖')

const objA = { aaa: 1, bbb: 444 }

let set: Set<number> = new Set([1, 2, 3, 4])


const gen = (erg:any):void => {
  let it: Iterator<any> = erg[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = it.next()
    if (!next.done) {
      console.log(next.value, '----');
    }
  }
}
gen(set)