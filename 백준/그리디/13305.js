const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
})

const it = rl[Symbol.asyncIterator]();

async function runner(){
    const {value:stationCount}= await it.next();
    let st = +stationCount


    const {value:distance}= await it.next();
    let d = distance.split(' ').map(Number)

    const {value:stationPrice}= await it.next();
    let sp = stationPrice.split(' ').map(Number).slice(0,-1)

    let answer = BigInt(0)

    let minPrice = sp[0];
    for (let i =0; i<sp.length; i++){
        minPrice = Math.min(minPrice, sp[i])
        answer += BigInt(d[i]) * BigInt(minPrice)
    }

    console.log(answer.toString())
}



runner()