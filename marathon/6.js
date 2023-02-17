//프로그래머스 없는 숫자 더하기

//예전 풀이
// function solution(numbers) {
//     arr= Array(10).fill(0)
//     numbers.forEach((elem)=> arr[elem]++)
//     const newArr = arr.map((elem,index)=>(elem==0)?index:0)
//     return newArr.reduce((prev,curr)=>prev+curr,0)
// }

//2023년 풀이
function solution(numbers) {
    return 45-numbers.reduce((a,b)=>a+b)
}
