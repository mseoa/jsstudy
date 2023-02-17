//프로그래머스 내적

//예전 풀이
// function solution(a, b) {
//     return a.map((elem,index)=>elem*b[index])
//         .reduce((prev,curr)=>prev+curr,0)
// }

//페어 풀이
// function solution(a, b) {
//     let array = 0
//     for (let i =0;i<a.length;i++){
//         array += a[i]*b[i]
//     }
//     return array;
// }

//2023 풀이
function solution(a, b) {
    return a.map((elem,index)=>elem*b[index]).reduce((a,b)=>a+b)
}