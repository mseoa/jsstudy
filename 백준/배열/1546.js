let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0]
let arr = input[1].split(' ').map(Number)
let max = arr.reduce((a,b)=>Math.max(a,b))
console.log(arr.map((el)=>el/max*100).reduce((a,b)=>a+b)/n)