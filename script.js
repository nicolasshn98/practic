'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
	}
}
	


const information = {
	name: 'Kolya',
	subname: 'Hnizdyukh',
	country: 'Ukraine',
	age: {
		number: 16,
		mounth: 'december',
		year: 1998
	}
};

console.log(Object.keys(information).length);

for (let key in information) {
	if (typeof (information[key]) === 'object') {
		for (let i in information[key]) {
			console.log(`Свойство ${i} имеет значение ${information[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${information[key]}`);
	}
}





