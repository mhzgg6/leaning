import "./index.css";
import print from "./print";



function add(x, y) {
  return x + y;
}

console.log('index js 被重新加载');


add(1, 2);

if (module.hot) {
  //  一旦 module.hot 为true，开启 HMR 功能
  module.hot.accept('./print.js', function () {
    //  监听 print.js 文件的变化
    print();
  })
}