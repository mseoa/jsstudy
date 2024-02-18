let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n')

let S = +input[0]
let count=0


for (let i =1; i<=S; i++){
    S = S-i
    if (S<0){
        break
    } else {
        count++
        continue
    }
}    

console.log(count)