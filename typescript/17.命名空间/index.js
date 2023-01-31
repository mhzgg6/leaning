"use strict";
//  ts 与 ECMAScript2015 一样 任何包含顶级 import 或者 export 的文件都被当成一个模块
//  反之，如果一个文件不带有顶级的 import 或者 export 声明，那么它的内容被视为全局可见
Object.defineProperty(exports, "__esModule", { value: true });
const index2_1 = require("./index2");
var a;
(function (a) {
    a.Time = 1000;
    a.fn = (arg) => {
        return arg;
    };
    a.fn(a.Time);
})(a || (a = {}));
var b;
(function (b) {
    b.Time = 1000;
    b.fn = (arg) => {
        return arg;
    };
    b.fn(b.Time);
})(b || (b = {}));
console.log(a.Time);
console.log(b.Time);
//  嵌套命名空间
(function (a) {
    let b;
    (function (b) {
        class Vue {
            constructor(parameters) {
                this.parameters = parameters;
            }
        }
        b.Vue = Vue;
    })(b = a.b || (a.b = {}));
})(a || (a = {}));
let v = a.b.Vue;
console.log(new v('mzh'));
//  抽离命名空间
console.log(index2_1.M);
//  简化命名空间
var D;
(function (D) {
    let F;
    (function (F) {
        F.c = 1;
    })(F = D.F || (D.F = {}));
})(D || (D = {}));
var C = D.F;
console.log(C.c);
