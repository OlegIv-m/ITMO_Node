const http = require('http');
const fs = require('fs');
const index = '/http/index.html';

const web_server = http.createServer( (req,resp)=> {
	fs.readFile(index,'utf8',(err,data)=>{
		if(err) {
			console.log('error',index);
			resp.statusCode = 404;
			resp.end();
		}
		else {
			console.log('Web server is running!');
			resp.writeHead(200,{'Content-Type': 'text/html'});
			resp.end(data);
		};
	});
});
	
web_server.listen(8080);