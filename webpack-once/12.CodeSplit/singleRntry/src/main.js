import { app } from "./js/app.js";
// 引入资源，Webpack才会对其打包
import "./iconfont/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./styl/index.styl";

console.log(app(1, 2, 3, 4, 5));

document.getElementById("btn").onClick = function () {
  // eslint会对动态导入语法报错，需要修改eslint配置文件
  // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
  // "math"将来就会作为[name]的值显示。
  import(/* webpackChunkName: "math" */ "./js/math.js").then(({ sum }) => {
    console.log(sum(2, 1));
  });
};