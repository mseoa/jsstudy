//프로그래머스 행렬의 덧셈

//예전풀이
// function solution(arr1, arr2) {
//     return arr1.map((value,idx)=>value.map((elem,index)=>elem +arr2[idx][index]))
// }

//현재풀이
// function solution(arr1, arr2) {
//     let answer = arr1.map((elem,index)=>elem.map((el,idx)=>el+arr2[index][idx]))
//      return answer;
//  }

//2023년 풀이

function solution(arr1, arr2) {
    let answer = []  //answer라는 빈 배열을 만든다
    for (let i =0;i<arr1.length;i++){ //입력받은 arr1의 개수만큼 반복을 돌린다
        answer[i] = []; //answer에 빈 배열을 하나 넣는다
        for (let j = 0;j<arr1[i].length;j++){ //그 배열에 넣을 값을 위해서 반복을 또 돌린다 이때는 그 빈배열만큼 돌려야하기 때문에 배열안의 배열의 갯수만큼 돌린다
            answer[i].push(arr1[i][j] + arr2[i][j]); //방금 만든 빈 배열에 원하는 자리의 값을 push한다.
        }
    }
 } 