'use strict';

/*let li = document.querySelectorAll('li');
let table = document.querySelector('table');



Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td,tdId)=>{
        tdId===0?td.innerHTML+= '!!!':'';
    });
});

li.forEach(elem=>elem.innerHTML += '!!!');*/

/*
for(let elem of li){
    elem.innerHTML += '!!!';
}*/
// let newLi = li.map(elem=>elem.innerHTML += '!!!');
// console.log(li);
/*let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.map(elem=>elem*2);*/
// console.log(arr);
/*
let p =document.querySelector('p');
let arr2 = [];
p.textContent = '!' + p.textContent.replace(/\s/g, '!');

p.textContent.split(' ').forEach(item=>arr2.push('!'+item));
// console.log(arr2)
p.textContent = arr2.join(' ');
console.log(p);*/

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
let productUniqueObj = {};
let productUniqueArr = [];
product.forEach((elem) => {
    productUniqueObj[elem] = true;
    !productUniqueArr.includes(elem)?productUniqueArr.push(elem):'';
});
console.log(productUniqueArr);
console.log(Object.keys(productUniqueObj));


/*
Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td,tdId)=>{
        tdId===0?td.innerHTML+= '!!!':'';
    });
});
*/
