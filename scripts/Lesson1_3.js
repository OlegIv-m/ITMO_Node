// 3 (для итоговой работы): Разработать свою авторскую страницу на 
// код ошибки 404. Вот статья на эту тему: https://habrahabr.ru/post/213227/

const http = require('http');
const fs = require('fs');
const index_404 = 'C:\\Users\\it\\Documents\\GitHub\\ITMO_Node\\html\\404.html';

const web_server = http.createServer( (req,resp)=> {
	fs.readFile(index_404,'utf8',(err,data)=>{
		if(err) {
			console.log('error',index_404);
			resp.statusCode = 404;
			resp.end(data);
		}
		else {
			console.log('Web server is running!');
			resp.writeHead(200,{'Content-Type': 'text/html'});
			resp.write(data);
			resp.end(data);
		};
	});
});
	
web_server.listen(8080);