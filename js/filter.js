'use strict';

/* удаление дубликатов */

let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
console.log(uniqueValues);

/* выборка в зависимости от регистра */

let users = [
    { name: 'Иван', surname: 'Иванов', age: 16 },
    { name: 'Петр', surname: 'Сидоров', age: 17 },
    { name: 'Игнат', surname: 'Пионов', age: 18 },
    { name: 'Семен', surname: 'Смирнов', age: 19 },
    { name: 'Глеб', surname: 'Новиков', age: 18 },
    { name: 'Иван', surname: 'Новичков', age: 18 },
];
let select = users.filter(item => item.surname.includes('нов'));
console.log(select);

/* выборка только jpg */

let table = document.querySelector('table');
let arrTable = [];
Array.from(table.rows).forEach((tr)=>{
    let objTr = {};
    Array.from(tr.cells).forEach((td,id)=>{
        id===0?objTr['id']=td.innerHTML:id===1?objTr['name']=td.innerHTML:id===2?objTr['src']=td.innerHTML:'';
    })
    arrTable.push(objTr);
})
console.log(arrTable);
let jpg = arrTable.filter(item => item.src.includes('jpg'));
console.log(jpg);




