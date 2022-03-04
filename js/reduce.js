'use strict';

let arr = [1, 2, 3, 4];

let sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0);

console.log(sumWithInitial);

let sum = 0;
for(let elem of arr){
    sum+=elem;
}
console.log(sum);