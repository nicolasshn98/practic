'use strict';

// Передача по ссылке ( якщо міняється копія то міняється і головний обєкт, бо це ccылка)

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj; // ссылка
// copy.a = 10;

// console.log(copy); // {a: 10, b: 1}
// console.log(obj);  // {a: 10, b: 1}


// 1) Клонирование обьекта с  помощью цыкла (поверхностная копия - якщо міняємо обєкт в обєкті,
//    то робиться силочний тип данних)

function copy(mainObj) {
	const objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
// newNumbers.c.x = 10; // тоді міняється значення в копіїї обєкта і в головному обєкті

console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }



// 2) Поверхностная копия с помощью Object.assign(куди хочемо помістити, що хочемо помістити) - соединяет сразу  
//    несколько обьектов

const add = {
	d: 17,
	e: 20
};

const log = {
	f: 30,
	j: 22,
	k: {
		x: 5,
		y: 3
	}
};

console.log(Object.assign(log, add)); // { f: 30, j: 22, k: { x: 5, y: 3 }, d: 17, e: 20 }

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add); // { d: 17, e: 20 }
console.log(clone); // { d: 20, e: 20 }



// 3) Поверхностная копия масива .slice

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'aaa';

console.log(newArray); // [ 'a', 'aaa', 'c' ]
console.log(oldArray); // [ 'a', 'b', 'c' ]


// 4) Поверхностная копия , ...Spread оператор - развaрачивает структуру

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook']; //поміщає все з (video) і (blogs)в (internet) і додає решту
console.log(internet);


// ще один приклад як працюэ Spread оператор
	
function pup (a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

pup(...num); // тут Spread оператор розгортає масив num і робить три окремих значення які підставляють в функцію як
// а це 2, b це 5, с це 7


// 4) Способ поверхностных копий обьектов Spread оператор для копий обьектов

const arr = ['a', 'b'];

const newArr = [...arr]; // працює так само як вприкладі вище

// копия обьекта (працюэ так само як в масивах) 

const obj = {
	one: 1,
	two: 2
};

const newObj = { ...obj };

console.log(newObj);

