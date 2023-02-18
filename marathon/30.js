//최소 직사각형

//미션 때 풀이
// function solution(sizes) {
//     let biggerSideMax = 0;
//     let smallerSideMax = 0;

//     for(let i=0;i<sizes.length;i++) {
//     let sorted = sizes[i].sort((a,b)=>b-a)
//     let big = sorted[0]
//     let small = sorted[1]
//     if (big>biggerSideMax) {
//         biggerSideMax = big
//     }
//     if (small>smallerSideMax){
//         smallerSideMax = small
//     }
//     }
//     return biggerSideMax * smallerSideMax;
// }

//현재 풀이
function solution(sizes) {
    let maxArr = []
    let minArr = []
    for (i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>b-a)
        maxArr.push(sizes[i][0])
        minArr.push(sizes[i][1])
    }
    let max = maxArr.sort((a,b)=>a-b).pop()
    let min = minArr.sort((a,b)=>a-b).pop()
    return max*min
}