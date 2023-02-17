//프로그래머스 짝수와 홀수


//예전 풀이
// function solution(num) {
//     return (num%2 == 0) ? "Even" : "Odd"
// }

//23년 2월 풀이
function solution(num) {
    return (num%2==0)?"Even":"Odd"
}



// function solution(s) {
//     console.log(s.length)
//     var answer = '';
//     if(s.length %2==1){
//         let index = (s.length-1)/2
//         let answer = s.split('')[index]
//         return answer;
//     }else{
//         let index1 = ((s.length)/2)-1
//         let answer = s.split('')[index1]+(s.split('')[index1+1])
//         return answer;
//     }
    
// }