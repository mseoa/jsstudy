//프로그래머스 이상한 문자 만들기

//예전 풀이
// function machine(a){
//     return a.split('').map((elem,index)=>{
//     if ((index+1)%2==0)
//         return elem.toLowerCase()
//     return elem.toUpperCase()}).join('')
// }

// let arr = []

// function solution(s) {
//     for (i=0;i<s.split(' ').length; i++){
//         let newStr = s.split(' ')[i]
//         arr.push(machine(newStr))
//     } return arr.join(" ")
// }


//페어 풀이
// function solution(s) {
//     let arr = s.split(' ')
//     let list = []
//     for (i=0;i<arr.length;i++){
//         let word = arr[i].split('')

//         list[i] = []
//         for (j=0;j<word.length;j++){
//             if(j%2==0){
//                 list[i].push(word[j].toUpperCase())   
//             }else{
//                 list[i].push(word[j].toLowerCase())   
//             }
//         }
//     }
//     let answer;
//     let str = list.join(' ');
//     answer = str.replaceAll(',','')
//     return answer
// }

//현재 풀이
function solution(s){
    return s.split(' ')
        .map((elem)=>elem.split('')
            .map((el,idx)=> {if(idx%2==0){
                            return el.toUpperCase()
                            } else {return el.toLowerCase()}
            })
            .join(''))
        .join(' ')
}