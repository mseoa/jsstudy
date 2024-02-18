const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin
})

const it = rl[Symbol.asyncIterator]();

async function runner(){
    const {value: N} = await it.next();

    let arr = new Array()

    for (let i = 0; i < N ; i++){
        const {value: time} = await it.next()

        arr.push(time.split(' ').map(Number))
    }

     arr.sort((a,b)=>{
        if (a[1]!=b[1]) return a[1]-b[1]
        else return a[0]-b[0]
    })

    let answer = 1
    let current = 0
    for (let i = 1; i < N ; i++){
        if (arr[current][1]<= arr[i][0]){
            current = i
            answer ++
        }
    }

    console.log(answer)
    
}

runner()

/**
 [ [ 1, 3 ], [ 5, 5 ], [ 4, 5 ] ]
2
 [ [ 1, 3 ], [ 4, 5 ], [ 5, 5 ] ]
3
 */