import '../css/index.css';
import { abc } from "./test"; 

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(abc(1, 3));