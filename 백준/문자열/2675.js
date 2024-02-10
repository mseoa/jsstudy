let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = +input[0]
for (let i = 1; i<=t;i++){
    let arr = input[i].split(' ')
    let r = +arr[0]
    let s = arr[1].split('').map(el=>el.repeat(r)).join('')
    console.log(s)
}

/** 
// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";
    // 현재 문자열의 각 문자를 하나씩 확인하며 for (let j = 0; j <= s.length; j++) {
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r); }
      console.log(result);
    }
*/