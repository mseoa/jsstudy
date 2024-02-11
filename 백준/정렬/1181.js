let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/정렬/input.txt').toString().trim().split('\n')

let arr = input.splice(1)
let setArr = [...new Set(arr)]
console.log(setArr)
setArr.sort((a,b)=>{
    if (a.length !=b.length){
        return a.length-b.length // 길이가 같으면 길이가 짧은것이 우선
    } 
     else {
        if (a<b){ // a-b가 음수이면 ((a,b)=>a-b)
            return -1
        } else if (a>b){
            return 1
        } else {
            return 0
        }
    }
})

console.log(setArr)