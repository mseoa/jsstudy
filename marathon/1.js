// 프로그래머스 직사각형 별찍기 문제

//예전풀이

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
    
//      for (i=1;i<=b;i++){console.log("*".repeat(a))}
// });

//23년 2월 15일 풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let arr = data.split(' ').map((elem)=>+elem)
    let n = arr[0]
    let m = arr[1]
    for (i=0;i<m;i++){
        console.log('*'.repeat(n))
    }
});


