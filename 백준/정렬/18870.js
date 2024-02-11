let fs = require('fs');
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/정렬/input.txt').toString().trim().split('\n');

let inputArr = input[1].split(' ').map(Number)
let sortedInputArr = input[1].split(' ').map(Number).sort((a,b)=>a-b)
let newArr = [...new Set(sortedInputArr)]

// let obj = {}
let newMap = new Map()
// for (let i =0; i< newArr.length; i++){
//     obj[newArr[i]] = i
// }

for (let i =0; i< newArr.length; i++){
    newMap.set(newArr[i],i)
}


let answer = inputArr.map((el)=> el = newMap.get(el)).join(' ')

console.log(answer)
