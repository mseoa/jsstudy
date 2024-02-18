let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n')

let N = +input[0]

let count = parseInt(N/5)

let answer;

for (let i=count;i>=0;i--){
    let quo2 = N - 5*count
    let quo3 = parseInt(quo2/3)
    let rem3 = quo2%3
    if (rem3 ==0){
        answer = count + quo3
    } else {
    count--
    }
}

if (answer){
    console.log(answer)
} else {
    console.log(-1)
}