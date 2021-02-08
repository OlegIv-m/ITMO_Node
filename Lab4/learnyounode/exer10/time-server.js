const net = require('net');

let web_server = net.createServer( (response) => {
	let date = new Date(Date.now());
	let year = date.getFullYear();
	let month = ( (date.getMonth()+1) <10) ? `0${date.getMonth()+1}`: date.getMonth()+1;
	let day = ( (date.getDate()) < 10 ) ? `0${date.getDate()}`:date.getDate();
	let hours = ( (date.getHours()) < 10 ) ? `0${date.getHours()}` : date.getHours();
	let minutes = ( (date.getMinutes()) < 10 ) ? `0${date.getMinutes()}` : date.getMinutes();
	response.setEncoding('utf8');
	if (!response.write(`${year}-${month}-${day} ${hours}:${minutes}\n`, 'utf8', ()=> {console.log('response written!');}))
		console.log('Error writing to socket!');
	response.pipe(response);
	response.end();
	console.log('Client request!');
	response.destroy();
	web_server.close( () => {
		console.log('server stopped!');
	});
} ).listen(process.argv[2]);