let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
const numArr = input.map(Number);
let answer = numArr.sort((a, b) => a - b);
console.log(answer.join(' '));


