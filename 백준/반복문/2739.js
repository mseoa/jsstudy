let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('/n');
let num = +input[0]
for (i=1;i<=9;i++){
    console.log(`${num} * ${i} = ${num*i}`)
}
