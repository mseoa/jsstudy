let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n')

let [A,B] = input[0].split(' ').map(Number)
let count=0
let answer;

while(A<B){
    if (B.toString().split('').pop()=='1'){
        B = +`${B}`.slice(0,-1)
        count++
        continue
    } else if (B%2==0){
        B = B/2
        count++
        continue
    } else {
        answer = -1
        break
    }
}

console.log(A==B?count+1:-1)

// console.log(answer==-1? answer : count)

//42
//21
//20
//10
//5
//4


2
21
42
84
