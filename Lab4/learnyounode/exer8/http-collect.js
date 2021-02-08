const http = require('http');
const bl = require('bl');

const url = process.argv[2];

let bls = new bl();

bls.on('data',() => { console.log('end');});

http.get( url, (response) => {
	response.setEncoding('utf8');
	response.pipe(bls);
	// bls.on('data', ()=> {
		// console.log('close');
	// });
	// console.log("Length of BufferList: " ,bls.length);
	response.on('end',() => {
		console.log(bls.length);		
		console.log(bls.toString());
	});
});