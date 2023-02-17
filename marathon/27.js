//프로그래머스 콜라츠 추측

// function machine(a){
//     if (a % 2 == 0)
//         return a/2
//     if (a % 2 == 1)
//         return (a*3)+1
//     }

// function solution(num) {
//     for (i=0;i<=500;i++){
//     if (num == 1) return i;
//     num = machine(num);
//     }
//     return -1
// }

//페어 풀이
// function solution(num){
//     let i=0
//     while (num!=1){
//         if (num%2 ==0){
//             num = num/2
//         }else{
//             num = (num*3)+1
//         }
//         i++;
//     }
//     return (i>500)?-1:i
// }


function solution(num){
    let count = 0
    while (num!==1){
        if (num%2==0){
            num = num/2
        } else {
            num = num*3+1
        }
        count++
    }
    return (count>500)?-1:count
}