let fs = require('fs');
let input = fs.readFileSync(/dev/stdin).toString().split('\n');
let hour = Number(input[0].split(" ")[0])
let minute = Number(input[0].split(" ")[1])
let time = Number(input[1])

function timer(hour, minute, time){
    let ansMin = (minute+time)%60
    let ansHour = (hour + parseInt((minute+time)/60))%24
    console.log(ansHour + " " + ansMin)
}

/** 
timer(hour, minute, time)

let [a, b] = input[0].split(' ').map(Number); let c = Number(input[1]);
let totalMinute = a * 60 + b + c; // 분의 형태로 바꾸기 totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;
console.log(hour + " " + minute);
*/