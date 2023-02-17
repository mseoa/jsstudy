function solution(participant, completion) {
    var answer = '';
    let set = new Set(participant)
    // console.log("set",set)
    let arr = [...set]

    if (arr.length == participant.length) {
        // console.log("arr",arr)
        return participant.filter(x => !completion.includes(x)).join('')
    } else {
        for (const element of completion) {
            const index = participant.indexOf(element);
            if (index !== -1) {
                participant.splice(index, 1); // remove element from result
            }
        }
        return participant.join('');
    }
}
// 내장함수는
// 인클루드(시간 유효성을 더 잡아먹는다) 필터(시간 유효성을 더 잡아먹는다)
// forEach(시간 유효성을 더 잡아먹는다)



// function subtractArrays(array1, array2) {
//     const result = [...array1]; // copy array1 to result

//     for (const element of array2) {
//       const index = result.indexOf(element);
//       if (index !== -1) {
//         result.splice(index, 1); // remove element from result
//       }
//     }

//     return result;
//   }

// const array1 = [1, 2, 3, 2, 4];
// const array2 = [2, 3, 5];


// const result = subtractArrays(array1, array2); // [1, 2, 4]

//  const words = ['dash','apple','bay','cristal','dash']
//  const secrchWords ='dash';
//  console.log(words.indexOf(searchWord)) //0


// console.log("arr",arr)
// console.log(participant.filter(x => !arr.includes(x)))
// for (i=0;i<length;i++){
//     participant.filter((elem)=>)
// }


// const arr1 = ['1','2','3','4','5'];
// const arr2 = ['1','2'];

// // 차집합(Difference)
// console.log(arr1.filter(x => !arr2.includes(x)));\
//	[ '3', '4', '5' ]



// function solution(participant, completion) {
//     const participantObj = participant.reduce((acc,curr) =>{
//         const isSame = Boolean(acc[curr])
//         return{...acc,[curr]: isSame? acc[curr]+1 :1}
//     },{})

//     completion.forEach((person)=>participantObj[person]--)

//     for (let person in participantObj){
//         if (participantObj[person]===1) return person
//     }
// }

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


// 저 완전 간단한 방법 찾았어요 대박임 -현주
// function solution(participant, completion) {
//     participant.sort(); //참가자 배열 정렬
//     completion.sort(); //완주자 배열 정렬
//     for(var i=0;i<participant.length;i++){
//         if(participant[i] !== completion[i]){
//             //인덱스 0부터 순차적으로 두 배열 비교
//             return participant[i];
//             //비완주자가 참가자 배열에 나올 경우 출력
//         }
//     }
// }

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


// eden
// pp["leo", "kiki", "eden"] => "leo", "
// cp["eden", "kiki"] => " "kiki",

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

