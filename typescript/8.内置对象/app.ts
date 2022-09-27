let b: Boolean = new Boolean(1)
console.log(b);
let n: Number = new Number(true)
console.log(n);
let str: String = new String('mhz')
console.log(str);
let date: Date = new Date()
console.log(date);
let r: RegExp = /[a-z]/
console.log(r);
// let err: Error = new Error('---error--')
// console.log(err);

/**
 * DOM / BOM 内置对象
*/
// let body: HTMLElement = document.body
// let allDiv: NodeList = document.querySelectorAll('div')
//  读取div 这种需要类型断言 或者加个判断读不到为null
// let div: HTMLElement = document.querySelector('div') as HTMLDivElement
// document.addEventListener('click', function (e: MouseEvent) {

// })

//  Promise
function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}
promise().then(res => {
  console.log(res);
})


