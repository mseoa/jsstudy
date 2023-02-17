//프로그래머스 핸드폰 가리기

//예전 풀이
// function solution(phone_number) {
//     a = `${phone_number}`.split('').map((elem)=>parseInt(elem))
//     b = Array(a.length-4).fill("*").join('')
//     c = a.splice(a.length-4,4).join('')
//     return b+c
// }

//페어 프로그래밍
// function solution(phone_number) {
//     var answer = '';
    
//     let number = phone_number.slice(-4)
//     let list = phone_number.length-4
//     answer = '*'.repeat(list) +number
//     return answer;
// }

//2023 풀이
function solution(phone_number) {
    let show = phone_number.slice(-4)
    return "*".repeat(phone_number.length-4)+show
}