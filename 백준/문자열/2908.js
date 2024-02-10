let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let ans = input[0].split(' ').map(el=>Number(el.split('').reverse().join(''))).reduce((a,b)=>Math.max(a,b))
console.log(ans)