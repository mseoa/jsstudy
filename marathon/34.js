//프로그래머스 모의고사

https://hun-dev.tistory.com/23

//2023 풀이
function solution(answers) {
    let stu1 =[1, 2, 3, 4, 5]

    let stu2 = [2, 1, 2, 3, 2, 4, 2, 5]

    let stu3 =[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let ans1 = answers.filter((elem,index)=>elem==stu1[index%stu1.length]).length
    let ans2 = answers.filter((elem,index)=>elem==stu2[index%stu2.length]).length
    let ans3 = answers.filter((elem,index)=>elem==stu3[index%stu3.length]).length
    
    let ansArr = [ans1,ans2,ans3]
    let max = Math.max(...ansArr)
    let answer = []
    
    if (ansArr[0]==max) answer.push(1);
    if (ansArr[1]==max) answer.push(2);
    if (ansArr[2]==max) answer.push(3);
    
    return answer
}