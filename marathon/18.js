//서울에서 김서방 찾기


//예전 풀이
// function solution(seoul) {
//     const a = seoul.indexOf("Kim")
//     return `김서방은 ${a}에 있다`
// }

//페어 풀이
// function solution(seoul) {
    
//     let getName = seoul.findIndex((name) => name == "Kim")
     
//    return `김서방은 ${getName}에 있다`
    
//  }

//현재 풀이
function solution(seoul) {
    let loca = seoul.indexOf("Kim")
    return `김서방은 ${loca}에 있다`
}