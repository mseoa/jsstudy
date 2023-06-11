let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');
let n = Number(input[0])

for (i=1;i<=n;i++){
    console.log('*'.repeat(i))
}