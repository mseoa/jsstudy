// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let line = input[0].split(" ")
// let h = line[0]
// let m = line[1]

function alarm (hour, min){
    if (min>=45) {
        console.log(`${hour}`+ " " + (Number(`${min}`)-45))
    } else {
        let sub = 45-min
        let minute = 60-sub
        hour==0?console.log(23+ " " + minute):console.log(`${hour}`-1+ " " + minute)
    }
}

alarm(23,40)

/** 
if (minute < 45) { // 분이 45분 미만이라면 
    hour -= 1;
    minute += 15;
    if (hour < 0) hour = 23;
    }
else minute -= 45;
console.log(hour + " " + minute);
*/