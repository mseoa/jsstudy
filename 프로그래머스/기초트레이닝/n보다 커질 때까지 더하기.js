/**
 * 2023/06/01
 */

function solution(numbers, n) {
    let result = 0
    let i = 0
    while(result<=n){
        result = result + numbers[i]
        i++
    }
    return result
}