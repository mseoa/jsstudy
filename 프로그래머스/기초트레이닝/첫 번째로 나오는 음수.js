/**
 * 2023/06/01
 */

function solution(num_list) {
   let num = num_list.filter((elem)=>elem<0)[0]
   return num_list.indexOf(num)
}

//다른사람 풀이
const solution = num_list => num_list.findIndex(v => v < 0)