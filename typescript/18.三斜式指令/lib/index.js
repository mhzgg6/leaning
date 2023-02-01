"use strict";
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
var A;
(function (A) {
    A.b = 1;
})(A || (A = {}));
///<reference path="./index1.ts" />
///<reference path="./index2.ts" />
var A;
(function (A) {
    A.c = 3;
})(A || (A = {}));
console.log(A);
