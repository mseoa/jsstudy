let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input.splice(1).map((elem)=> elem.split(' ').map(Number))

arr.sort((a,b)=>{
    if (a[1]===b[1]){
        return a[0]-b[0]
    } else {
        return a[1]-b[1]
    }
})

let ans = arr.map((el)=>el.join(' ')).join('\n')

console.log(ans)