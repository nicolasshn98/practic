'use strict';

// console.log(document.querySelector('#current').parentNode);

// console.log(document.body.childNodes);

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}