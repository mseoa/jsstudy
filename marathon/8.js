//프로그래머스 평균 구하기

//예전풀이
// function solution(arr){
//     const sum = arr.reduce((prev,curr)=>(prev + curr),0)
//     return sum / arr.length
// }

//페어프로그래밍
// function solution(arr) {
//     var answer = 0;
//     let length = arr.length;
//     let sum = arr.reduce((sum,curr)=>sum+curr)
//     answer = sum/length
//     return answer;
// }

//2023년 풀이
function solution(arr){
    let avg = arr.reduce((a,b)=>a+b)/arr.length
    return avg
 }
