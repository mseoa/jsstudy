function solution(participant, completion) {
    var answer = '';
    let key = new Map()

    for(let i = 0; i < completion.length; i++){
        if(!key.has(completion[i])){
            //  값이 없을때
            key.set(completion[i], 1)
            }
        else{
            // 값이 있을때
            key.set(completion[i], key.get(completion[i]) + 1)
        }
    }
    // key ={ 'stanko' => 1, 'ana' => 1, 'mislav' => 0 }
    for(let i = 0; i < participant.length; i++){
        if(!key.has(participant[i])){
            return participant[i]
        } else {
            let count = key.get(participant[i])
            if (count == 0){
                return participant[i]
            } else {
                key.set(participant[i], count-1)
            }
        }
    }
}

let participant = ["mislav", "stanko", "mislav", "ana"]
let completion = ["stanko", "ana", "mislav"]