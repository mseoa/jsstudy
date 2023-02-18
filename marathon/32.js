//프로그래머스 두 개 뽑아서 더하기

function solution(numbers) {
    let addArr = []
    for (i=0;i<numbers.length-1;i++){
        for(j=i+1;j<numbers.length;j++){
            addArr.push(numbers[i]+numbers[j])
        }
    }
    let arr = new Set(addArr.sort((a,b)=>a-b))
    return [...arr]
}