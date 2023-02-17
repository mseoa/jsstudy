//프로그래머스 3진법 뒤집기

//예전풀이
// function solution(n) {
//     let arr =[]
//     let reverse =`${n.toString(3)}`.split('').reverse().join('')
//     let answer = parseInt(reverse,3)
//     return answer
    
// }


//페어 풀이
// function solution(n) {
//     var answer = 0;
//     let num = n.toString(3)
//     console.log(num)
//     let list = String(num).split('')
//     let reverselist = list.reverse()
//     let str = reverselist.reduce((a,b)=>a+b)

//     console.log(parseInt(str,3))

//     return parseInt(str,3);
// }

//현재 풀이
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''),3)
}
