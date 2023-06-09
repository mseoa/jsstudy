/**
 * 2023/06/09
 */

function solution(my_string, alp) {
    return my_string.split('').map(elem=> elem==alp?elem.toUpperCase():elem).join('')
}

// 다른사람풀이
// str.replaceAll(,)이라는게 있넹
function solution(my_string, alp) {
    return my_string.replaceAll(alp,alp.toUpperCase())
}