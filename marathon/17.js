//프로그래머스 문자열 다루기 기본

//예전 풀이
// function solution(s) {
//     if (s.length == 4 || s.length ==6) {
//         return `${s}`.split('').filter((elem)=> isNaN(elem)).length >= 1 ? false: true
// } else
//     return false
// }

//페어 풀이
// function solution(s) {
//     let arr = []
//     s.split('').forEach((elem)=>arr.push(isNaN(elem)));
//     if (s.length==4||s.length==6){
//         return (arr.filter((elem)=>elem==true).length)==0?true:false}
//     else{
//         return false
//     }
// }

//현재풀이

function solution(s) {
    if ((s.length==4||s.length==6)&&!s.includes('e')){
        return isNaN(+s)?false:true
    } else {
        return false
    }
}
console.log("10e1")

//예외처리, 정규표현식
//애매하다면 잘라서 처리해야한다...
//string. includes

