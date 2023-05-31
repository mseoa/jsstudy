//프로그래머스 문자열 내 마음대로 정렬하기


//예전풀이
// function solution(strings, n) {
//     let wordArr = strings.map((elem)=>elem.split('')[n])
//     let addedArr = wordArr.map((el,ind)=>el+strings[ind])
//     let sortedArr = addedArr.sort()
//     let ansArr = sortedArr.map((elem)=>elem.split('').slice(1).join(''))
//     return ansArr
// }

//현재 풀이
function solution(strings, n) {
    let word = strings.map((elem)=>elem=elem[n]+elem).sort()
    return word.map((elem)=>elem.substr(1))
}