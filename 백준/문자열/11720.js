let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let sum = input[1].split('').map(Number).reduce((a,b)=>a+b)
console.log(sum)
