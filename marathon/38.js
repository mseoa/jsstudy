//프로그래머스 숫자 문자열과 영단어

let s = "oneoneone1" //1478
// let s = "23four5six7"
// let s = "2three45sixseven"

function solution(s){
    let ans = machine(s)
    return +ans;
}

function machine(str){
let strArr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    while(isNaN(+str)){
    for (let i=0;i<strArr.length;i++){
    if (str.indexOf(strArr[i])>=0)
    str = str.replace(strArr[i],i)
    }
    }
    return str
}

console.log(solution(s))
console.log(isNaN(+'11one1'))