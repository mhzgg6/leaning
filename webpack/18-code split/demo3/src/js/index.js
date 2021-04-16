// import { abc } from "./test"; 

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4));
// console.log(abc(1, 3));

/*
 *  通过js代码，让某个文件单独打包成一个chunk
 */

import(/* webpackChunkName: 'test' */'./test')
  .then(({abc, red}) => {
    console.log(abc(2, 5));
  })
  .catch(err => {
    console.log('文件加载失败');
  })
