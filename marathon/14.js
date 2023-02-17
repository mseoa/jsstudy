//프로그래머스 나누어 떨어지는 숫자 배열

예전풀이
// function solution(arr, divisor) {
//     const a = arr
//         .filter((elem)=>(elem % divisor)==0)
//         .sort((a,b)=>a-b)
    
//     if (a.length) return a;
//     return [-1]
// 

//페어 풀이
// function solution(arr, divisor) {
//     let newArr = []
//     arr.forEach(element => {
//         if (element%divisor==0){
//             newArr.push(element)
//         }
//     });
//     if (newArr.length==0){
//         return [-1]
//     } else {
//         let sorted = newArr.sort((a,b)=>a-b)
//         return sorted
//     }
// }

//2023 풀이
function solution(arr, divisor) {
    let ansArr = arr.filter((elem)=>elem%divisor==0).sort((a,b)=>a-b)
    return ansArr.length==0?[-1]:ansArr
}