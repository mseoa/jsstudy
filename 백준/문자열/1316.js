let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = +input[0]
for (let i = 1;i<=n; i++){
    let arr = []
    let word = input[i].split('')
    for (let j=0;j<word.length;j++){
        if (arr.filter(el=>el==word[j]).length == 0) arr.push(word[j])
        eslse
    }
}