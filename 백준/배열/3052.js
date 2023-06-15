let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // tc 중 맨뒤에 \n이 붙는애들이 있음
let arr = input.map(el=>Number(el)%42)
let count = new Set(arr)
console.log([...count].length)