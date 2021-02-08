const http = require('http');
const fs = require('fs');
const cp = require('child_process');
const server = http.createServer(worker);

const path = require('path');

const child = cp.fork('./child.js');


//parse request and send response
function worker(req,resp) {
    child.send({
        method: req.method,
        params: req.url,
    })
    resp.statusCode = 200;
    resp.end();
	
}

server.listen(8080, ()=>{console.log('server run on 8080 port!')});



