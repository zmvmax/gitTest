'use strict';

/* калории */

let animals = [
    { name: 'медведь', likes: 'мед' },
    { name: 'волк', likes: 'мясо' },
    { name: 'белка', likes: 'шишки' }
]

let foodCalories = animals.map(item => {
    let obj = {};
    obj[item.name] = item.likes;
    obj.calories = item.name.length * 10;
    return obj;
})
console.log(foodCalories);


/* порядковый номер */

let arrSymbols = ['a', 'b', 'c', 'd'];
let arrResult = arrSymbols.map((item, id)=>(id+1)+item);

console.log(arrResult);

/* студенты и группы */

let obj = [
    {name: 'Иванов', group: 'ИСП 18-1'},
    {name: 'Петров', group: 'ИСП 18-2'},
    {name: 'Сидоров', group: 'ИСП 18-3'},
];

let arrStudents = obj.map((item, id)=>`${(id+1)} ${item.name} из ${item.group}`);

console.log(arrStudents);

/* номера паспортов */

let arrStudent = [
    { passport: '03005988', name: 'Иванов', age: 16},
    { passport: '03005989', name: 'Петров', age: 17},
    { passport: '03005990', name: 'Сидоров', age: 18,},
]
let passports = arrStudent.map(item => item.passport);

console.log(passports);