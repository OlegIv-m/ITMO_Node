let http = require('http');
let fs = require('fs');
let path = require('path');

let mimeTypes = {
	'.js': 'text/javascript',
	'.html': 'text/html',
	'.css': 'text/css',
	'.jpg': 'image/jpeg',
	'.gif': 'image/gif',
	'.ico': 'image/x-icon',
}

http.createServer ((req,resp)=>{
	let pathname;
	if (req.url==='/') {
		pathname = 'site/index.html';
	} else {
		pathname = 'site' + req.url;
	}
	let extname = path.extname(pathname);
	mimeType = mimeTypes[extname];
	if ( extname === '.jpg' || extname === '.gif' || extname === '.ico') {
		try {
			console.log('img: ' + extname);
			console.log('mimeType: ' + mimeType);
			console.log('pathname: ' + pathname);
			let img = fs.readFileSync(pathname);
			resp.writeHead ( 200, {'Content-Type': mimeType });
			resp.end(img);		
		} catch (e) {
			console.log('Couldnt find file: ' + pathname);
			resp.statusCode = 202;
			resp.end();
		}
	} else {
		console.log("Request: " + req.url);
		fs.readFile(pathname, 'utf8', (err,data) => {
			if(err){
				console.log('Couldnt find or open file-' + pathname);
				resp.statusCode = 404;
				resp.end();
			} else {
				console.log(`The file ${pathname} ie read and send to client\n`);
				console.log ('mimeTypes[path.extname(pathname)]= ' + mimeTypes[path.extname(pathname)]);
				resp.writeHead(200,{'Content-Type': mimeTypes[path.extname(pathname)]});
				resp.end(data);
			}
		});
	}
}).listen(8080, () => {
	console.log('Web server is working!');
});