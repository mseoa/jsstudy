//프로그래머스 x만큼 간격이 있는 n개의 숫자

//예전 풀이
// function solution(x, n) {
//     return Array(n).fill(0).map((elem,index)=>(index+1)*x)
//  }

 //2023 풀이
 function solution(x, n) {
   return Array(n).fill(x).map((elem,index)=>(++index)*elem)
}