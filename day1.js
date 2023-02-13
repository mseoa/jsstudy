function solution(sizes) {
    let biggerSideMax = 0;
    let smallerSideMax = 0;

    for(let i=0;i<sizes.length;i++) {
    let sorted = sizes[i].sort((a,b)=>b-a)
    let big = sorted[0]
    let small = sorted[1]
    if (big>biggerSideMax) {
        biggerSideMax = big
    }
    if (small>smallerSideMax){
        smallerSideMax = small
    }
    }
    return biggerSideMax * smallerSideMax;
} 

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))