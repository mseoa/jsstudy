let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');
let num = Number(input[0])
console.log(num*(num+1)/2)