// 프로그래머스 두 정수 사이의 합

//예전 풀이
// // function solution(a, b) {
//     sort = [a,b].sort((x,y)=>y-x)
//     return (sort[0]+sort[1])*(sort[0]-sort[1]+1)/2
// }

//조원들과 풀이
// function solution(a, b) {
//     var answer = 0;
//     let getNum = a - b;
//     let getAbs = Math.abs(getNum);
//     if (getNum > 0) {
//         for (let i = 0; i < getAbs; i++) {
//             answer += b
//             b += 1;
//         }
//         answer += b
//     } else if (getNum < 0) {
//         for (let i = 0; i < getAbs; i++) {
//             answer += a
//             a += 1;
//         }
//         answer += a
//     } else {
//         answer = a
//     }
//     return answer;
// }
