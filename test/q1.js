let num1 = 160;//8
// let num2 = 900;//1
// let num3 = 550;//5
// let num4 = 320;//6

function solution(num){
    let change = 1000-num
    let count = 0
    while(change!==0){
        if (change>=500)
            change = change - 500
        else if (change>=100)
            change = change - 100
        else if (change>=50)
            change = change - 50
        else if (change>=10)
            change = change - 10
        count++
    }
    return count
}

console.log(solution(num1))