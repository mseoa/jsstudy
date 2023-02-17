//예전 풀이
// function solution(absolutes, signs) {
//     return signs
//         .map((elem,index)=> elem ? parseInt(''+ absolutes[index]):parseInt("-"+absolutes[index]))
//         .reduce((prev,curr)=>prev+curr)
// }

//2023년 풀이
function solution(absolutes, signs){
    let arr = absolutes.map((elem,index)=> signs[index]?elem:-elem)
    return arr.reduce((a,b)=>a+b)
}

//map

