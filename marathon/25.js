//프로그래머스 정수 제곱근 판별

// function solution(n) {
//     const a = Math.sqrt(n)
//     if (Number.isInteger(a) == true)
//         return Math.pow(a + 1,2)
//     else
//         return -1
// }

// function solution(n) {
//     let sqrt = Math.sqrt(n);
//     if(Number.isInteger(sqrt)){
//         let getSqrt = sqrt + 1;
//         return getSqrt ** 2
//     }else{
//         return -1
//     }
  
// }

function solution(n) {
    let sqrt = Math.sqrt(n)
    return Number.isInteger(sqrt)?Math.pow(sqrt+1,2):-1
}