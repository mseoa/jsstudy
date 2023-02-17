//프로그래머스 완주하지 못한 선수]

//1번풀이
function solution(participant, completion) {

    const counts = {};
    for (const name of completion) {
        // console.log(name)
        counts[name] = (counts[name] || 0) + 1;
        // console.log(counts)
        // console.log(counts[name])
    }


    for (const name of participant) {
        if (!counts[name] || counts[name] === 0) {
            // console.log(name)
            return name;
        } else {
            counts[name]--;
            console.log(counts[name])
        }
    }
}


2번풀이
저 완전 간단한 방법 찾았어요 대박임 -현주
function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}


//3번풀이 동찬님 풀이
// function solution(pp, cpl) {
//     pp.sort()
//     cpl.sort()
//     while (pp.length) {
//         let pPop = pp.pop()
//         if (pPop !== cpl.pop())
//             return pPop
//         else {
//             null
//         }
//     }
// }


//4번 동찬님 조원 풀이
function solution(pp, cpl) {
    let key = new Map()
    for (let i = 0; i < cpl.length; i++) {
        if (!key.has(cpl[i])) {
            key.set(cpl[i], 1)
        } else {
            key.set(cpl[i], key.get(cpl[i]) + 1)
        }
        // kim : 4
        //kim : 3 -1 -1 -1 => 0
    }
    for (let i = 0; i < pp.length; i++) {
        if (!key.has(pp[i])) {
            return pp[i]
        } else {
            let count = key.get(pp[i])
            if (count == 0) {
                return pp[i]
            } else {
                key.set(pp[i], count - 1)
            }
        }
    }
}

let ke