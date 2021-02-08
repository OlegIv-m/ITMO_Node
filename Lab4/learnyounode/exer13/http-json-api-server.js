const http = require('http');
//const url = require('url');
let time = require('./data.json');

const port = process.argv[2];

let epochTime = {
	"unixtime": 0
}

const web_server = http.createServer( (request, response ) => {
	let proto = ( request.connection.encrypted ) ? "https" : "http"; 
	//console.log(proto);
	//console.log('timer: ', time.hour);
	let fullpath = `${proto}://${request.headers.host}${request.url}`;
	console.log(fullpath);
	const myURL = new URL( fullpath );
	console.log(myURL.searchParams.get('iso'));
	let pathname = myURL.pathname;
	let iso = myURL.searchParams.get('iso');
	let date = new Date(iso);
	console.log('pathname: ', myURL.pathname);
	response.writeHead(200, { "Content-Type" : "application/json" } );
	if ( myURL.pathname === '/api/parsetime') {
		console.log('pathname: ', myURL.pathname);
		time.hour = date.getHours();
		time.minute = date.getMinutes();
		time.second = date.getSeconds();
		response.end(JSON.stringify(time));
		response.end( () => { console.log('Send response')} );		
	} else if ( myURL.pathname === '/api/unixtime' ) {	
		console.log('pathname: ', myURL.pathname);
		let now = new Date(iso);
		epochTime.unixtime = now.getTime();
		console.log(epochTime);
		response.end(JSON.stringify(epochTime));
	} else {
		console.log('pathname: ', myURL.pathname);
		let now = new Date(iso);
		epochTime.unixtime = now.getTime();
		console.log(epochTime);
		response.end(JSON.stringify(epochTime));
	}
});

web_server.listen(port, () => {
	console.log(`server started at ${port}`);
});