// let N = 5;
// let arr1=[['1', '.', '.', '.', '.'], 
// 		    ['.', '.', '3', '.', '.'], 
// 			['.', '.', '.', '.', '.'],
// 			['.', '4', '.', '.', '.'], 
// 			['.', '.', '.', '9', '.']]; 

let N = 4;
let arr1 = [['2', '.', '.', '.'],['.', '.', '9', '.'],['.', '3', '.', '2'],['.', '4', '.', '.']];

function solution(N, arr1){
	let x = [1, -1, 0, 0, 1, 1, -1, -1];
	let y = [0, 0, 1, -1, 1, -1, 1, -1];
    let answer = []
    for (let i=0;i<N;i++){
        answer[i]=[]
        for (let j=0;j<N;j++){
            if (!isNaN(+arr1[i][j])) {
                answer[i][j]='*'
            } else{
                answer[i][j]=[]
                for (let q=0;q<8;q++){
                    let xx = i + x[q]
                    let yy = j + y[q]
                    if (xx>=0&&xx<N&&yy>=0&&yy<N&&!isNaN(+arr1[xx][yy])){
                        answer[i][j].push(Number(arr1[xx][yy]))
                }
                
            }
            }
        }
    }
    let ans = answer.map((elem)=>elem.map((el)=>{
        if(!Array.isArray(el)){
            return el = el} 
        else if (el.length==0) {
            return el = 0}
        else {
            if (el.reduce((a,b)=>a+b)>=10){
                return 'M'
            }else {
                return el.reduce((a,b)=>a+b)
            }
        }
    }))

    return ans;
}

console.log(solution(N, arr1))