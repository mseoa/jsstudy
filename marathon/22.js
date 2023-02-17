//프로그래머스 자릿수 더하기

// function solution(n)
// {
//     var answer = `${n}`.split('').map((a)=>parseInt(a)).reduce((prev,curr)=>prev+curr,0);

//     return answer;
// }

// function solution(n) {
//     let list = []
//     let word = String(n).split('')
//     let p = word.map((ele) => Number(ele))
//     let q = p.reduce((a, b) => a + b)
//     return q
// }  

function solution(n){
    return `${n}`.split('').map((elem)=>+elem).reduce((a,b)=>a+b)
}