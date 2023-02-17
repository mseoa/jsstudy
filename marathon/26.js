//프로그래머스 제일 작은 수 제거하기

//예전 풀이
// function solution(arr) {
//     let min = arr[0]
//     const a = arr.forEach(elem=>{
//         if (elem < min)
//             min = elem
//     })
    
//     let b = []
//     arr.forEach((elem)=>{
//         if (elem != min)
//             b.push(elem)
//     })
    
//     if (b.length ==0)
//         return [-1]
//     else return b
// } 

//페어 풀이
// function solution(arr) {

//     let index = arr.indexOf(Math.min(...arr)) //1 //10
//     arr.splice(index,1)
//     if (arr.length==0){
//         return [-1]
//     } else{
//         return arr
//     }
//     console.log(arr)
// }

function solution(arr) {
    let min = [...arr].sort((a,b)=>b-a).pop()
    let idx = arr.indexOf(min)
    arr.splice(idx, 1)
    return arr.length==0?[-1]:arr
}