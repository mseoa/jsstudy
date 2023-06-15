let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[1].split(' ').map(Number)
console.log(arr.reduce((a,b)=>Math.min(a,b))+' '+arr.reduce((a,b)=>Math.max(a,b)))