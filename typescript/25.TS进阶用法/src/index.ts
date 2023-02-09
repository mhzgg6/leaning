interface EventFace {
  on: (name: string, callback: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}
interface List {
  [key: string]: Array<Function>
}
class Dispatch implements EventFace {
  list: List
  constructor() {
    this.list = {}
  }

  on(name: string, callback: Function) {
    const callbackList: Array<Function> = this.list[name] || []
    callbackList.push(callback)
    this.list[name] = callbackList
  }

  emit(name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.warn('该事件未监听')
    }
  }

  off(name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      let index = eventName.findIndex(curFn => curFn === fn)
      eventName.splice(index, 1)
    } else {
      console.warn('该事件未监听')
    }
  }

  once(name: string, fn: Function) {
    let decor = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, decor)
    }
    this.on(name, decor)
  }

}

const o = new Dispatch()
const fnc = (...args: Array<any>) => {
  console.log('fnc', args);
}
// o.on('abc', fnc)
o.once('abc', fnc)
o.emit('abc', 'mhz', 1)
// o.emit('bc', 'mhz', 1)

// o.off('abc', fnc)

console.log(o);

