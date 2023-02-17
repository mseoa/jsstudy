function solution(strings, n) {
    let wordArr = strings.map((elem)=>elem.split('')[n])
    let addedArr = wordArr.map((el,ind)=>el+strings[ind])
    let sortedArr = addedArr.sort()
    let ansArr = sortedArr.map((elem)=>elem.split('').slice(1).join(''))
    return ansArr
}

console.log(solution(["sun", "bed", "car"],1))