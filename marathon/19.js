//프로그래머스 수바수박수박수박

//예전풀이
// function solution(n) {
//     const arr = Array(n).fill(0).map((elem,index)=>index+1)
//     return arr
//         .map((elem,index)=>{
//         if (index%2==1) 
//             return elem ="박"; 
//         else 
//             return elem = "수"
//     }).join('')
// }

//페어풀이
// function solution(n) {
//     let arr = []
//     for (let i=1;i<=n;i++){
//         if (i%2==1){
//             arr.push("수")
//         } else {
//             arr.push("박")
//         }
//     }
//     return arr.join('')
// }

//2023풀이
function solution (n){
    let ans = ""
    for (i=1;i<=n;i++){
        if (i%2==1){
            ans += "수"
        } else {
            ans += "박"
        }
    }
    return ans
}