//프로그래머스 자연수 뒤집기

//예전풀이
// function solution(n) {
//     answer = `${n}`.split('').map((elem)=>parseInt(elem)).reverse()
//     return answer
// }

//페어풀이
// function solution(n) {
//     let word = String(n).split('')
//     let q = word.reverse().map((ele) => Number(ele));
//     return q
// }  

//현재풀이
function solution(n) {
    return `${n}`.split('').map((elem)=>+elem).reverse()
}  
