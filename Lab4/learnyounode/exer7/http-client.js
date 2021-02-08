const http = require('http');
const url = process.argv[2];

let result = [];
let strings = http.get(url, receive);

function receive(income){
	income.setEncoding('utf8');
	income.on('data', (data) => {
		result.push(data);
	});
	income.on('end', () => {
		result.forEach( (curr) => {
			console.log(curr);
		});
	});
}