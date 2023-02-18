function isPrime(num) {
	if(num === 1) return false; 
    let div = parseInt((Math.sqrt(num)))
 	for(let i = 2; i <= div; i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}

https://peach-milk.tistory.com/entry/%EC%86%8C%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

console.log(isPrime(2))



// function isPrime(){
//     for (let div=2;div<=Math.ceil(Math.sqrt(num));div++){
//         if (num%div==0){
//             notPrime.push[num]
//             break
//         } else {
//             continue
//         }
// }
// }

// function solution(num){
//     let isPrime = []
//     let notPrime = []
//     if (num==1){
//         notPrime.push[num]
//     }

//    for (let div=2;div<=Math.ceil(Math.sqrt(num));div++){
//         if (num%div==0){
//             notPrime.push[num]
//             break
//         } else {
//             continue
//         }
//         console.log(notPrime)
//     }
//     console.log(notPrime)

// }

// solution(12);
