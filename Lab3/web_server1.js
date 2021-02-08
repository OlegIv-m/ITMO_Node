const http = require('http');
const fs = require('fs');
const server = http.createServer(worker);

const path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.ico': 'images/x-icon',
}
const defaultFileType = mimeTypes['.html'];

const fileList = {
	'en_EN': './html/en.html',
    'ru_RU': './html/ru.html',
    'favicon': './images/favicon.ico',
}

const defaultFile = fileList['index'];

//parse request and send response
function worker(req,resp) {
	let url = req.url;
	let urlExt = path.extname(url);
    let type = mimeTypes[urlExt];
    console.log('type: ', type);
	switch (type) {
		case '.html':
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
	let filename = process.env.LANG;
	console.log('filename: ', filename);
	let sendFile;
	for ( let [key, value] of Object.entries(fileList)) {
		console.log('key=' + key + ' ; value= ' + value);
		if( key == filename) {
			sendFile = value;
		}
	}
	
    console.log(process.argv[0], process.argv[1]);
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



