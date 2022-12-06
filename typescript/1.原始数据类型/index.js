// 布尔值
// let isDone: boolean = false
// let createdByNewBoolean: boolean = new Boolean(1)  //  返回 boolean 对象
var createdByNewBoolean = Boolean(1);
console.log('布尔值', createdByNewBoolean);
/**
 * 数值
*/
var num = 6;
// es6 二进制
var hex = 0xf00d;
// es6 十进制
var oct = 484;
var notNumber = NaN;
var infinityNumber = Infinity;
console.log('Number', num, hex, oct, notNumber, infinityNumber);
// 6 61453 484 NaN Infinity  二进制和八进制 => 十进制
/**
 * 字符串
*/
var myName = 'Tom';
var myAge = 25;
var sentence = "hello, my name is ".concat(myName);
console.log('String-', sentence);
/**
 * 空值
 *     表示没有任何返回值的函数
*/
function alertName() {
    // window.alert('my name is tom')
}
var unusable = undefined;
var vnull = null; //   非严格模式才能赋值 null
console.log(alertName());
/**
 * null or undefined
*/
var u = undefined;
var n = null;
