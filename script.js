'use strict';

function copy(mainObj) { // фунція приймає в себе аргумент ( це буде обєкт obj)
	let objCopy = {}; // пуста перемінна в яку поміститься якби копія obj

	let key; // обявляєм перемінну key
	for (key in mainObj) { // ключи в mainObj ( якби ключи в obj)
		objCopy[key] = mainObj[key]; /// в значением ключа в objCopy помещаем значение какби ключів в  obj

	}
	return objCopy; // наружу
}

let obj = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newObj = copy(obj); // нова перемінна в якій запускаєм фунціяю яка працює з обєктом obj

newObj.a = 10; // в новій переменні в якій є копія obj в ключа "а" міняємо значення на 10

console.log(newObj);
console.log(obj);

/// Spread operator

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];	// ... витягуэ елементи (Spread operator)

console.log(internet);


// Передаємо елементи з масиву в функціїї

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

console.log(...num); // розгортає масив і передає в функцію