let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let one = input[0]
let two = input[1].split('') //split 안해도됨!
let three = one*two[2]
let four = one*two[1]
let five = one*two[0]
let six = one*input[1]

console.log(three)
console.log(four)
console.log(five)
console.log(six)