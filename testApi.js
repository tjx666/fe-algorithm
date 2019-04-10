const _ = require('lodash');

console.log(Array.from({ length: 10 }, (ele, k) => _.random(-100, 100)))

const res = [1, 3, 2, 8, 12, 7].sort((a, b) => a  - b);
console.log(res)