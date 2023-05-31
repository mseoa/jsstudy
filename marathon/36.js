//프로그래머스 문자열 내림차순으로 배치하기

//예전풀이
// function solution(s) {
//     return `${s}`.split('').sort().reverse().join('')
// }

function solution(s) {
    return s.split('').sort().reverse().join('')
}