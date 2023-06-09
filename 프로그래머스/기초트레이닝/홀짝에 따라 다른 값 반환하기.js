/**
 * 2023/06/02
 */


function solution(n) {
    if (n%2==0){
        let quo = Math.floor(n/2)
        let ans = 0
        for (i=1;i<=quo;i++){
            ans = ans + Math.pow(2*i,2)
        }
        return ans
    }else{
        let quo = Math.ceil(n/2)
        let ans = 0
        for (i=1;i<=quo;i++){
            ans = ans + (2*i-1)
        }
        return ans
    }
}