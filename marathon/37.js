//프로그래머스 소수 만들기

//현재 풀이

https://gurtn.tistory.com/101

function isPrime(n){
    if (n==1) return false
    for (let i=2;i<=parseInt(Math.sqrt(n));i++){
        if (n%i==0) return false
    }
    return true
}

function solution(nums) {
    let sumArr = []
    let answer = 0
    for (let i=0;i<nums.length-2;i++){
        for (let j=i+1;j<nums.length-1;j++){
            for (let a=j+1;a<nums.length;a++){
                if (isPrime(nums[i]+nums[j]+nums[a])) answer++
            }
        }
    }
    return answer
}