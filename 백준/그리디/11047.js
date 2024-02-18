let fs = require('fs')
let input = fs.readFileSync('/Users/seoa/Desktop/jsstudy/백준/그리디/input.txt').toString().trim().split('\n')

let [N, K] = input[0].split(' ').map(Number)
let arr = input.splice(1).map(Number).reverse()
let answer = 0

while (K!==0){
    for (let coin of arr){
        let quo = Math.floor(K/coin)
        if (quo>=1){
            K = K - coin * quo
            answer = answer + quo
        }
    }
}

console.log(answer)