let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = input[0].split(' ')
console.log(Number(line[0])+Number(line[1]))