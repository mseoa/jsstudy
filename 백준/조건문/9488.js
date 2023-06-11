/**
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let score = Number(input[0]);
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let score = Number(input[0]);

function check (s) {
    if (score >= 90 && score <= 100) console.log("A");
    else if (score >= 80 && score <= 89) console.log("B");
    else if (score >= 70 && score <= 79) console.log("C");
    else if (score >= 60 && score <= 69) console.log("D");
    else console.log("F");
}

check(score);

