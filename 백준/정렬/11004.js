let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let info = input[0].split(' ')
let answerIdx = Number(info[1])-1
let arr = input[1].split(' ')
let toNum = arr.map(Number)
console.log(toNum.sort((a,b)=>a-b)[answerIdx])



// let length = Number(input[0].split(' ')[0])

// let [n, k] = input[0].split(' ').map(Number)