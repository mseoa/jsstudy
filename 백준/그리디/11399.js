let fs = require('fs');
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n');

let count = +input[0];
let arr = input[1].split(' ').map(Number).sort((a,b)=>b-a)
let answer = 0

for (let i = 0 ; i < count ; i++){
    answer = answer + arr[i] * (i+1)
}

console.log(answer)