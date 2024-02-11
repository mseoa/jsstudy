let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let numArr = input.map(Number)
numArr.shift()
numArr.sort((a,b)=>a-b)
let answer = numArr.join('\n').trim()
console.log(answer)


// let length = +input[0]
// for (let i = 1;i<length;i++){
//     input[i]
// }