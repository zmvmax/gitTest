'use strict';

/*

// Дана строка в формате JSON, содержащая массив с числами:
let json = '[1,2,3,4,5]';
// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.
let sum = (JSON.parse(json)).reduce((a,b) => a + b, 0);
console.log(sum);
*/

/*

// Дана строка в формате JSON, содержащая объект с данными:
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
// Найдите сумму чисел из представленных данных.

let sum = Object.values(JSON.parse(json)).flat().reduce((a,b) => a + b, 0);
console.log(sum);
*/


// console.log(Object.values(JSON.parse(json)).forEach(item=>item.reduce((a,b) => a + b, 0)))


    //



    // ;


/*

// Дана строка в формате JSON, содержащая имена юзеров:
let json = '["user1","user2","user3","user4","user5"]';
// Выведите эти имена в виде списка ul.

let html='<ul>';
JSON.parse(json).forEach(li=>{html+=`<li>${li}</li>`}); html+='</ul>';
document.body.innerHTML = html;
*/












// Дана строка в формате JSON, содержащая массив с данными работников:
/*let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;*/
// Выведите этих работников на экран в виде HTML таблицы.
/*let obj = JSON.parse(json);

let html = '<table><tr>';

Object.keys(obj[0]).forEach(th=>{html+=`<th>${th}</th>`});html+='</tr>';
obj.forEach(item=>{html+='<tr>'; Object.values(item).forEach(elem=>{html+=`<td>${elem}</td>`});html+='</tr>';});
html+='</table>'
document.body.innerHTML = html;*/

// localStorage.setItem('test', 1);
alert( localStorage.getItem('test') );