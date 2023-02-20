//로또의 순위

let lottos = [44, 1, 0, 0, 31, 25]
let win_nums = [31, 10, 45, 1, 6, 19]

function solution(lottos, win_nums) {
    let matchedNum = []
    lottos.forEach((elem)=>{
        for(i=0;i<lottos.length;i++){
            if (elem==win_nums[i]){
                matchedNum.push(elem)
            } else {
                continue
            }
        }
    })
    let countZero = lottos.filter((elem)=>elem==0).length
    let rankArr = [6,6,5,4,3,2,1]
    let maxRank = countZero + matchedNum.length
    let minRank = matchedNum.length
    return [rankArr[maxRank],rankArr[minRank]]
  
}

console.log(solution(lottos,win_nums))