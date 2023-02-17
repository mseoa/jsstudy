//프로그래머스 내림차순으로 배치하기

//예전풀이
// function solution(n) {
//     return parseInt(`${n}`.split('').map((elem)=>parseInt(elem)).sort((a,b)=>b-a).join(''))
// }

//페어풀이 
// function solution(n) {
//     var answer = 0;
//     let num = String(n).split('')
//     let list = num.sort((a,b) =>b-a)

//     answer = list.reduce((a,b) =>a+b)


//     return Number(answer);
// }

function solution(n) {
    let ans = `${n}`.split('')
                    .map((elem)=>+elem)
                    .sort((a,b)=>b-a)
                    .join('')
    return +ans
}
