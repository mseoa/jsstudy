/**
 * 2023/06/01
 */

function solution(a, b) {
    if (Number(`${a}`+`${b}`)>Number(`${b}`+`${a}`)){
        return Number(`${a}`+`${b}`)
    } else if (Number(`${a}`+`${b}`)<Number(`${b}`+`${a}`)){
        return Number(`${b}`+`${a}`)
    } else {
        return Number(`${a}`+`${b}`)
    }
}

// 다른 사람 풀이
// + 안해줘도 됐었고, Math.max를 쓰면 됐당!
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}