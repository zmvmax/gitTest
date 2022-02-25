'use strict';

/*let li = document.querySelectorAll('li');
let table = document.querySelector('table');



Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td,tdId)=>{
        tdId===0?td.innerHTML+= '!!!':'';
    });
});*/
/*

li.forEach(elem=>elem.innerHTML += '!!!');

for(let elem of li){
    elem.innerHTML += '!!!';
}
// let newLi = li.map(elem=>elem.innerHTML += '!!!');
// console.log(li);
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.map(elem=>elem*2);
// console.log(arr);
let p =document.querySelector('p');
let arr2 = [];
p.textContent = '!' + p.textContent.replace(/\s/g, '!');

p.textContent.split(' ').forEach(item=>arr2.push('!'+item));
// console.log(arr2)
p.textContent = arr2.join(' ');
console.log(p);

let table = document.querySelector('table');
let sum = 0;
Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td, tdId)=>{
        tdId<3?sum+=Number(td.innerHTML):'';
        tdId===3?td.innerHTML=sum:'';
    })
    sum=0;
})
let count = 1;
Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td, tdId)=>{
        tdId<3?count*=Number(td.innerHTML):'';
        tdId===4?td.innerHTML=count:'';
    })
    count = 1;
})

Array.from(table.rows).forEach((tr)=>{
    let sum = 0;
    let pow = 1;
    Array.from(tr.cells).forEach((td, tdId)=>{
        if(tdId===3){
            td.innerHTML=sum;
        }
        else if(tdId===4){
            td.innerHTML=pow;
        }
        else{
            sum+=Number(td.innerHTML);
            pow*=Number(td.innerHTML);
        }
    })
})






let product = [
    'молоко',
    'сыр',
    'творог',
    'творог',
    'молоко',
    'сметана',
    'сметана',
    'молоко',
];
/!*1*!/let productUniqueObj = {};
/!*2*!/let productUniqueArr = [];
product.forEach((elem) => {
    /!*1*!/productUniqueObj[elem] = true;
    /!*2*!/!productUniqueArr.includes(elem)?productUniqueArr.push(elem):'';
});
/!*2*!/console.log(productUniqueArr);
/!*1*!/console.log(Object.keys(productUniqueObj));


Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td,tdId)=>{
        tdId===0?td.innerHTML+= '!!!':'';
    });
});







let users = [
    { name: 'Иван', age: 18 },
    { name: 'Петр', age: 12 },
    { name: 'Игнат', age: 16 },
    { name: 'Михаил', age: 18 },
    { name: 'Игорь', age: 18 }
]
let nameArr = [];
users.forEach(user => {
    if (user.age === 18) {
        console.log(user.name);
        nameArr.push(user.name);
    }
});
console.log(nameArr);

let arr = ['BMW', 'Mercedes', 'Volkswagen', 'Toyota'];
const carList = document.querySelector('.car-list');
let list = '';
arr.forEach(item => {
    list += `<li>${ item }</li>`
});
carList.innerHTML = list;

*/





















