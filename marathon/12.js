//프로그래머스 부족한 금액 계산하기

//예전풀이
// function solution(price, money, count) {
//     const answer = price*(count*(count+1))/2-money
//     if (answer>0)
//         return answer
//     else
//         return 0
// }

//페어프로그래밍 풀이
// function solution(price, money, count) {
//     let b  = 0
//      for (let i =1;i<=count;i++){
//           let a = price*i
//           b += a
//      }
//      if (money-b >0){
//          return 0;
//      }else {
//          return b-money
//      }
     
//  }

//2023 풀이
function solution(price, money, count) {
    let total = price*(count*(++count)/2)
    return total-money>0?total-money:0
}