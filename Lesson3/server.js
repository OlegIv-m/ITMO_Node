// 1*. Задание на HTML, CSS, JS (Ajax) и NodeJS: Разработать сервер, 
// который умеет отдавать запрашиваемые html страницы. Дана страница 
// index.html. В ней есть блок #container и кнопка вне этого блока. Сделайте 
// так, чтобы по нажатию на кнопку в #container ajax-ом подгружалось 
// содержимое страницы ajax.html.

const http = require('http');
const fs = require('fs');
const server = http.createServer(worker);

const path = require('path');

const mimeTypes = {
	'.html': 'text/html',
	'.css': 'text/stylesheet',
	'.js': 'application/javascript',
	'.ico': 'image/x-icon',
}
const defaultFileType = mimeTypes['.html'];

const fileList = {
	'index': './html/index.html',
	'style': 'styles/style.css',
	'ajax': './html/ajax.html',
	'loadAjax': './js/loadAjax.js',
	'favicon': './images/favicon.ico',
}

const defaultFile = fileList['index'];

//parse request and send response
function worker(req,resp) {
	let url = req.url;
	let urlExt = path.extname(url);
	let type = mimeTypes[urlExt];
	switch (type) {
		case '.html':
			resp.writeHead(200, {'Content-Type': mimeTypes[type]})
			break;
		
		case '.css': 
			resp.writeHead(200, {'Content-Type': mimeTypes[type]})
			break;
		
		case '.js': 
			resp.writeHead(200, {'Content-Type': mimeTypes[type]})
			break;
		case '.ico': 
			resp.writeHead(200, {'Content-Type': mimeTypes[type]})
			break;
		default: 
			resp.writeHead(200, {'Content-Type': defaultFileType})
			break;
	}
	
	let filenameObj = path.parse(url);
	let filename = filenameObj.name;
	console.log('filename: ', filename);
	let sendFile;
	for ( let [key, value] of Object.entries(fileList)) {
		console.log('key=' + key + ' ; value= ' + value);
		if( key == filename) {
			
			sendFile = value;
		}
	}
	
	// if( !sendFile )
		// sendFile = defaultFile;
	console.log('sendFile: ', sendFile);
	fs.readFile(sendFile, 'utf8', (err, data)=> {
		if(err) {
			console.log('File read error!');
			console.log('Err: ', err);
			resp.end('<h1>Cannot lod the page</h1>');
		}
		resp.write(data);
		resp.end();
	});
	
	
}

server.listen(8080);



