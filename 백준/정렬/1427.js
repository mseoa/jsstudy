let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/정렬/input.txt').toString().trim().split('\n')

let N = input[0]
let arr = N.split('').map(Number).sort((a,b)=>b-a).join('')
console.log(arr)