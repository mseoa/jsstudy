const yundo = {
    age: { korean: 27, international: 26 },
    name: 'Yundo Han'
}

const seoa = {
    'age': { korean: 26, international: 25 },
    'name': 'Seoa Moon',
    'ability': 'Coding'
}

const both = [yundo, seoa];

const ages: number[] = [];
both.forEach(elem => {
    ages.push(elem.age)
});

const ages2 = both.map(elem => elem.age);
const ageSum = both.reduce((sum, elem) => sum + elem.age.korean, 0);

[1,2,3,5,8,13,21...]

function fibo(a, b) {
    return a+b;
}
fibos = [1,2];
for (let i=2; i<10; i++) {
    fibos.push(fibo(fibos[i-1], fibos[i-2]))
}
for (const a of fibos) {
    console.log(a);
}

