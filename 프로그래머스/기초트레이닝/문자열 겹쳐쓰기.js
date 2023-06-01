/**
 * 2023/06/01
 */
// 다시 풀어보기.. slice만 쓰면되는 문제였는데 넘 복잡하게 풀었당

function solution(my_string, overwrite_string, s) {
    let ostr = overwrite_string.split('')
    let str = my_string.split('')
    let spliced = str.splice(s,overwrite_string.length,ostr.toString())
    return str.toString().split(',').join('')
}

// 당일 다시 푼 방식

function solution(my_string, overwrite_string, s) {
    return my_string.slice(0,s) + overwrite_string + my_string.slice(overwrite_string.length+s,my_string.length)
}