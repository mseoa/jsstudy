//프로그래머스 하샤드 수

// function solution(x) {
//     sum = `${x}`.split('').map((elem)=>parseInt(elem)).reduce((prev,curr)=>prev + curr, 0)
//     return x % sum == 0
// }

// function solution(x) {
//     let arr = String(x).split('')
//     let changNum = arr.map((ele) => Number(ele))
//     let sum = changNum.reduce((a,b) => a+b)
//     if ( x % sum ==0){
//         return true
//     }else {
//         return false
//     }
// }

function solution(x) {
    let sum = `${x}`.split('').map((elem)=>+elem).reduce((a,b)=>a+b)
    return (x%sum==0)?true:false
}