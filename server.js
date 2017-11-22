var http = require("http");
var tasks = require("./taskinfo.js");
console.log(tasks.info[1]);
http.createServer(onRequest).listen(3000);

function onRequest (request, response) {
		response.writeHead(200, {"Content-type": "text/plain"});
		response.write(tasks.info[Math.floor(Math.random() * tasks.info.length)]);
		response.end();
}