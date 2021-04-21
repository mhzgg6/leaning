console.log('aaaa');

import(/* webpackChunkName: 'a' */"./a.js")
.then(({ add }) => {
  console.log(add(1, 2));
})