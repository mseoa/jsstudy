let str = "OXOOOXXXOXOOXOOOOOXO"; //27
// let str2 = 'OOXXOXXOOO'//10
// let str3 = 'OXOXOXOXOXOXOX'//7
// let str4 = 'OOOOOOOOOO'//55


function solution(str){
	let correct = str.split('').map((elem)=>(elem=='O')?1:0)
    for (let i=1;i<correct.length;i++){
        if ((correct[i-1]>=1)&&(correct[i]==1))
            correct[i] = correct[i-1]+1
    }
    return correct.reduce((a,b)=>a+b)
}

console.log(solution(str))