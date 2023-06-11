let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = Number(input[0])
let ans = ''
for(i=1;i<=t;i++){
    ans += Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])+'\n'
}

console.log(ans)