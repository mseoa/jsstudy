let fs = require('fs')
let input = fs. readFileSync('/Users/seoa/Desktop/jsstudy/백준/정렬/input.txt').toString().trim().split('\n')

let arr = input.splice(1).map((el)=>el.split(' ')).sort((a,b)=>{
    return a[0]-b[0]
}).map((el)=>el.join(' ')).join('\n')

console.log(arr)