//프로그래머스 가운데 글자 가져오기

// function solution(s) {
//     if (s.split('').length % 2 ==1) 
//         return s.split('')[(s.split('').length-1)/2]
//     if (s.split('').length % 2 ==0) 
//         return s.split('')[(s.split('').length)/2-1] + s.split('')[(s.split('').length)/2]
// }


function solution(s){
    if (s.length%2==0){
        return s[(s.length)/2-1]+s[(s.length)/2]
    } else {
        return s[(s.length-1)/2]
    }
}




