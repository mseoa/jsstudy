let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
})

const it = rl[Symbol.asyncIterator]();

async function runner(){
    const {value: n} = await it.next()
    const N = +n

    const {value: height} = await it.next()
    const hArr = height.split(' ').map(Number)

    let arrowArr = []
    for (let i = 0; i < N; i++){
        if (arrowArr.indexOf(hArr[i])==-1 ){
            arrowArr.push(hArr[i]-1)
        } else {
            const idx = arrowArr.indexOf(hArr[i])
            arrowArr[idx]--
        }
    }

    console.log(arrowArr.length)
}

runner()