let s = "2 3 4 5"

// let s= "15 3 10 9 7 8"

// let s = '97 75 88 99 95 92 73'

function isPrime(num) {
	if(num === 1) return false; 
 	for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}

function solution(s){
    let prime = []
    let notPrime = []
    let numArr = s.split(' ').map((elem)=>+elem)
    for (i=0;i<numArr.length;i++){
        isPrime(numArr[i])?prime.push(numArr[i]):notPrime.push(numArr[i])
    }
    let max = prime.sort((a,b)=>a-b).pop().toString()
    let min = notPrime.sort((a,b)=>b-a).pop().toString()
    return min+" "+max
}

console.log(solution(s))




// function solution(s) { //조원 ㄱㅅ님 풀이
//     let getArray = s.split(" ");
//     let createArray = new Map();
//     let changeArray = [];
//     let changeArray2 = [];
  
//     for (let i = 0; i < getArray.length; i++) {
//       for (let j = 2; j <= Number(getArray[i]); j++) {
//         if (getArray[i] % j == 0) {
//           createArray.set(getArray[i], (createArray.get(getArray[i]) || 0) + 1);
//         }
//       }
//     }
  
//     for (let [count, acc] of createArray) {
//       if (acc === 1) {
//         changeArray.push(count);
//       } else {
//         changeArray2.push(count);
//       }
//     }
  
//     return `${Math.min(...changeArray2)} ${Math.max(...changeArray)}`;
//   }
//   let s = "97 75 88 99 95 92 73";
  
//   console.log(solution(s));