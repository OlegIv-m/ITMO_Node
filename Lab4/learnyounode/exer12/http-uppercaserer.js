const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const web_server = http.createServer( (request, response) => {
	if( !request.protocol === 'POST') {
		
		return;
	}
	
	request.pipe(map ( (chunk) => {
		return chunk.toString().toLocaleUpperCase();
	}) ).pipe(response);;
	
});

web_server.listen(port);