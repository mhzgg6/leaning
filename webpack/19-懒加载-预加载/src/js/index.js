console.log('index js被加载~');

import { mul } from './test';

//  懒加载
// btn.onclick = function() {
//   import(/* webpackChunkName: 'test' */'./test')
//   .then(({ mul }) => {
//     console.log(mul(2, 5));
//   })
//   .catch(() => {})
// }

//  预加载 等其他资源加载完了，再加载
btn.onclick = function() {
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test')
  .then(({ mul }) => {
    console.log(mul(2, 5));
  })
  .catch(() => {})
}