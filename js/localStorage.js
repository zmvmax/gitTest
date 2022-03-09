'use strict';

let button = document.querySelector('#button');

button.addEventListener('click', func);

function func() {
    let text = document.querySelectorAll('.text');
    let arr = Array.from(text).map(item=>item.value);

    let storage = localStorage.getItem('arrData');
    if(storage === null){
        localStorage.setItem('arr', JSON.stringify(arr));
    }
    else{

    }
}
