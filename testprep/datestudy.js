// let month = 1
// let day = 18


// function solution(month, day){
//     let today = new Date(`${month}/${day}`);
//     today.setDate(today.getDate()+98)
//     let dday = today.toLocaleDateString()
    
//     let answer = new Date(dday)
//     let ansDate = answer.getDate()
//     let ansMonth = answer.getMonth()+1
//     return `${ansMonth}월 ${ansDate}일`
// }

// console.log(solution(month,day))


let today = new Date('5/27')
// today.getDate()하면 => 27

// today.setDate(27+2)
// console.log(today)하면
// 2001-05-28T15:00:00.000Z

today.setDate(today.getDate()+30)
console.log(today.toLocaleDateString())

//new Date

