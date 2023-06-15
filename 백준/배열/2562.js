let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let max = input.map(Number).reduce((a,b)=>Math.max(a,b))
console.log(max)
console.log(input.map(Number).indexOf(max)+1);

/** 
let data = input.map(x => Number(x)); 
let max = Math.max(...data)
console.log(max)
console.log(input.indexOf(max) + 1)
*/
//https://stackoverflow.com/questions/70944210/why-is-the-spread-operator-needed-for-math-max 