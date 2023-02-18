//1. 신대륙 발견

// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 11, 27 "3월  5일"
// 6, 22 "9월 28일"
//1, 18 "4월 26일"
// let month = 11
// let day = 27

// let month = 6
// let day = 22

let month = 1
let day = 18


function solution(month, day){
    let today = new Date(`${month}/${day}`);
    today.setDate(today.getDate()+98)
    let dday = today.toLocaleDateString()
    
    let answer = new Date(dday)
    let ansDate = answer.getDate()
    let ansMonth = answer.getMonth()+1
    return `${ansMonth}월 ${ansDate}일`
}

console.log(solution(month,day))

// function solution(a,b){ //조원 ㅎㅈ님 풀이
//     let total =98
//     let totalMonth;
//     let day = [31,28,31,30,31,30,31,31,30,31,30,31]
//     let index = a-1; //0
//     let checkday = day[index] -b //31-18 
//     total = total-checkday //98-

//     for (let i=0;i<2;i++){
//         if(a+i > 11){
//             a = a-11
//             total = total - day[a]
//             if (total>day[a+1]){
//                 total=total-day[a+1]
//             }
//         } else{
//             total = total - day[a+i] 11
//         }  
//     }
//     totalMonth = a+3
//     return `${totalMonth}월 ${total}일`  
// }


