const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin
})

const it = rl[Symbol.asyncIterator]();

async function runner(){
    const {value: n} = await it.next()
    const N = +n

    for (let i = 0 ; i < N ; i++){
        const {value: t} = await it.next()
        let testData = +t

        let fivoArr = [0]
        let num = 1
        while (testData>=fivo(num)){
            fivoArr.push(fivo(num))
            num++
        }

        fivoArr.reverse()

        let answerArr = []

        for (let j = 0; j < fivoArr.length; j++){
            if (testData - fivoArr[j]>0){
                testData = testData - fivoArr[j]
                answerArr.push(fivoArr[j])
                continue
            } else if (testData - fivoArr[j]==0){
                answerArr.push(fivoArr[j])
                break
            }
            continue
        }
        console.log(answerArr.reverse().join(' '))
    }
}

let cache = {};
function fivo(num){
    if (cache[num]) return cache[num];
    if (num==1|| num==2){
        return 1
    }

    const value = fivo(num-1) + fivo(num-2)
    cache[num] = value;
    return value;
}


runner()