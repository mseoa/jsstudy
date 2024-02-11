let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/정렬/input.txt').toString().trim().split('\n')

let length = +input[0]
let arr = input.splice(1).map((elem)=> elem.split(' ').map(Number))

arr.sort((a,b)=>{
    if (a[0]===b[0]){
        return a[1]-b[1]
    } else {
        return a[0]-b[0]
    }
})

let ans = arr.map((el)=>el.join(' ')).join('\n')

console.log(ans)