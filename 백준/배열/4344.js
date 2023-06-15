let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let c = Number(input[0])
for (i=1;i<=c;i++){
    let arr = input[i].split(" ").map(Number)
    let n = arr[0]
    let avg = (arr.reduce((a,b)=>a+b) - n)/n
    arr.splice(0,1)
    let ans = arr.filter(el=>el>avg).length/n*100
    console.log(ans.toFixed(3)+"%")
}