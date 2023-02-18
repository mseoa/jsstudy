//프로그래머스 같은 숫자는 싫어

// function b(x,y) {
//     if (x==y)
//         return "^^"
//     return y
// }

// function solution(arr){   
//     let answer = []
//     answer.push(arr[0]);
    
//     for (i=0; i < arr.length-1; i++){
//     let x = arr[i]
//     let y = arr [i+1]
//     let c = b(x,y);
//     if (!isNaN(c)) answer.push(c)
//     }
    
//     return answer
// }

//현재 풀이
function solution(arr){
    for (i=1;i<arr.length;i++){
        if (arr[i]==arr[i-1]){
            arr[i-1]=' '
        } else{
            continue
        }
    }
    return arr.filter((elem)=>Number.isInteger(elem))
}
