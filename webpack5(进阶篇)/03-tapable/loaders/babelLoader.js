const { SyncHook, SyncBailHook, AsyncParallelHook, AsyncSeriesHook } = require('tapable');

class Lesson {
  constructor() {
    //  初始化hook容器
    this.hooks = {
      //  同步hooks 任务会依次执行
      go: new SyncHook(['address']),
      //  异步hooks 异步并行
      // leave: new AsyncParallelHook(['name', 'age'])
      //  异步hooks 异步串行
      leave: new AsyncSeriesHook(['name', 'age'])
    }
  }
  tap() {
    //  往hooks容器中注册时间 添加回调函数
    this.hooks.go.tap('calss_1', (address) => {
      console.log('calss_1', address);
    })
    this.hooks.go.tap('calss_2', (address) => {
      console.log('calss_2', address);
    })

    this.hooks.leave.tapAsync('class_3', (name, age, cb) => {
      setTimeout(() => {
        console.log('class_3', name, age);
        cb();
      },2000)
    })

    this.hooks.leave.tapPromise('class_4', (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('class_4', name, age);
          resolve();
        },1000)
      })
    })
  }
  start() {
    this.hooks.go.call('english');
    this.hooks.leave.callAsync('mao', 18, () => {
      //  代表所有leave容器中的钩子都执行完毕
      console.log('end~~~~');
    });
  }
}

const l = new Lesson();
l.tap();
l.start();

//  class_1 english