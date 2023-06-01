/**
 * 2023/06/01
 */
// 처음풀이
function solution(my_string, n) {
    return my_string.slice(my_string.length-n, my_string.length)
}
// 다시 푼 풀이. 하나만 주면 그부분 제외한 나머지 반환. 시작점과 끝점을 주면 그부분이 반환
function solution(my_string, n) {
    return my_string.slice(my_string.length-n)
}

