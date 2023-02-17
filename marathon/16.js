//프로그래머스 문자열 내 p 와 y의 개수


//예전 풀이
// function solution(s){
//     function findp(a){if (a == "p") return a}
//     function findP(a){if (a == "P") return a}
//     function findy(a){if (a == "y") return a}
//     function findY(a){if (a == "Y") return a}

//     function number(elem) {return `${s}`.split('').filter(elem).length}
    
//     return number(findp) + number(findP) == number(findy) + number(findY)
// }


//페어 풀이
// function solution(s){
//     let toLower = s.toLowerCase()
//     let p = toLower.split('').filter(ele => ele=='p')
//     let y = toLower.split('').filter(ele => ele=='y')
    
//      if (p.length == y.length) {
//          return true
//      } else {
//          return false
//      }
 
//     console.log(p)
//  }


//2023 풀이
function solution(s){
    let countP = s.toLowerCase().split('').filter((elem)=>elem=="p").length
    let countY = s.toLowerCase().split('').filter((elem)=>elem=="y").length
    return countP==countY?true:false
}