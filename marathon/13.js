//프로그래머스 2016년

//세션 + 페어프로그래밍
// function solution(a, b) {
//     let array = ['SUN','MON','TUE','WED','THU','FRI','SAT']
//     let day = new Date(2016,a-1,b)
//     return array[day.getDay()]
    
// }

//예전풀이
// function solution(a, b) {
//     var answer = '';
//     let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
//     const birthday = new Date(`${a} ${b} 2016`);
//     const day1 = birthday.getDay();
    
//     answer = day[day1]
    
//     return answer;
// }

//현재 풀이
function solution(a, b) {
    let array = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let answerDate = new Date(2016,a-1,b)
    return array[answerDate.getDay()]
}
