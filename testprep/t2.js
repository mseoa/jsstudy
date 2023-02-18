// let checkin = [9, 9, 8, 8, 7, 8, 9]
// let checkout = [21, 25, 30, 29, 22, 23, 30]

let checkin = [9, 7, 8, 9, 7, 9, 8]
let checkout = [23, 22, 26, 26, 29, 27, 22]

// let checkin = [9, 9, 9, 9, 7, 9, 8]
// let checkout = [23, 23, 30, 28, 30, 23, 23]

function solution(checkin, checkout){
    let timeArr = checkout.map((elem,index)=>{
        if (elem>=29){
            return 21-checkin[index]
        }else{
            return elem-checkin[index]
        }
    }
    )
    return timeArr.reduce((a,b)=>a+b)
}

console.log(solution(checkin,checkout))


// function solution(arr1, arr2) { //조원 ㄱㅅ님 풀이
//     let add = 0;
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2[i] > 28) {
//         let sum = 21 - Number(arr1[i]);
//         add += sum;
//       } else {
//         let sum = Number(arr2[i]) - Number(arr1[i]);
//         add += sum;
//       }
//     }
//   }


//   function solution(arr1, arr2){ //조원 ㅎㅈ님 풀이
// 	let answer=0;
//     let list =[]
//     for (let i=0;i<arr1.length;i++){
//         if (arr2[i]>=29){
//             arr2[i] = 21
//             list[i] = arr2[i] -arr1[i]
//         }else{
//             list[i] = arr2[i] -arr1[i]
//         }
//     }
//     answer = list.reduce((a,b) => a+b)
// 	return answer;
// }