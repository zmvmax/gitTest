'use strict';

let li = document.querySelectorAll('li');
let table = document.querySelector('table');



Array.from(table.rows).forEach((tr)=>{
    Array.from(tr.cells).forEach((td,tdId)=>{
        tdId===0?td.innerHTML+= '!!!':'';
    });
});

li.forEach(elem=>elem.innerHTML += '!!!');

/*
for(let elem of li){
    elem.innerHTML += '!!!';
}*/
// let newLi = li.map(elem=>elem.innerHTML += '!!!');
console.log(li);
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.map(elem=>elem*2);
console.log(arr);