const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    // output: process.stdout
})
const it = rl[Symbol.asyncIterator]();


async function runner() {
    const { value, done } = await it.next(); // 한 줄 씩 읽어서
    if (done) process.exit();
    const testCaseCount = +value;
    
    for (let i = 0; i < testCaseCount; i++) {
        let { value: n } = await it.next();
        n = +n;
        const rows = [];
        for (let j = 0; j < n; j++) {
            let { value: str } = await it.next();
            const [score1, score2] = str.split(' ').map(Number)
            const row = { score1, score2 };
            rows.push(row);
        }
        rows.sort((a, b) => a.score1 - b.score1);
        let selected = 1;
        let score2Min = rows[0].score2;
        for (let j = 1; j < n; j++) {
            if (rows[j].score2 < score2Min) {
                selected ++;
                score2Min = rows[j].score2;
            }
        }
        console.log(selected);
    }

    process.exit();
}

runner();
/*
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCaseCount = +input[0]
let arr = input.splice(1)

let testArrays =[]

for (let i=0;i<testCaseCount;i++){
    let count = arr[0]
    let spliced = arr.splice(1)
    let testCase = spliced.splice(0,count).map((el)=>el.split(' ').map(Number))

    arr = spliced
    testArrays.push(testCase)
}

let answer = ''

for (let testArray of testArrays){
    testArray.sort((a,b)=>a[0]-b[0])
    
    let count =0
    let cut = testArray.length
    testArray.map((el)=> {
        
        if (el[1]<=cut){         
            cut = el[1]

            count++
        }
    })

    answer = answer + '\n' + count
}

console.log(answer.trim())
*/