let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[0].split(" ")[2]);

if (a==b&&b==c&&c==a) console.log(10000+a*1000);
else if (a==b) console.log(1000+a*100);
else if (b==c) console.log(1000+b*100);
else if (c==a) console.log(1000+c*100);
else console.log(input[0].split(" ").reduce((a,b)=>Math.max(a,b))*100);