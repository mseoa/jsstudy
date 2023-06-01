/**
 * 2023/06/01
 */
// 오랜만에 푸니까 map도 생각이 안났당. 옛날이었으면 map 썼을텐딩


function solution(str1, str2) {
    let ans = ''
    for (i=0;i<str1.length;i++){
        ans = ans + str1[i] + str2[i]
    }
    return ans
}

// map 써서 다시 풀어봄
function solution(str1, str2) {
    return str1.split('').map((el,idx)=>el+str2.split('')[idx]).join('')
}

// 다른사람 풀이. [...str]하면 str.split('')과 같고, str[idx]해도 해당 번째 단어가 나온다는점..!
function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}