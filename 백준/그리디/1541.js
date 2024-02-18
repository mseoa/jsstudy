let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n')

let splitByMinus = input[0].split('-')

let summed = splitByMinus.map((el)=> {
    if(el.includes('+')){
        return el.split('+').map(Number).reduce((a,b)=>a+b)
    }else {
        return +el
    }
})

let answer = summed.reduce((a,b)=>a-b)

console.log(answer)