let array = {
    0: 'pink',
    1: 'yellow'
};
//Ниже специальная запись массива

let people = ['Emily', 'Aurora', 'Kylie'];

//В массив можно положить любые другие типы данных let people = ['Emily', true, 23];

console.log(people);
console.log(people[0]);

people[0] = 'Emilio';
console.log(people[0]);
console.log(people);

console.log(people.length);

let bigArray = [
    [1,2,3],
    [true, false],
    ['a','b','c']
];
console.log(bigArray[0][1]);

let bigObject = {
    names: ['Emily', 'Aurora', 'Kylie'],
    grades: [
        {
            intern: 1,
            junior: 2
        },
        {
            middle: 3,
            senior: 4

        }
    ]
};

console.log(bigObject.names);
console.log(bigObject.names[1]);
console.log(bigObject.grades[1].senior);