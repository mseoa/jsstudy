/**
 * 2023/05/31
 * \의 경우 앞에 \를 하나 더 붙여주어야함
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`)
});