var express = require("express");
var app = express();
var tasks= require("./taskinfo.js");
var routes = require("./routes.js");
app.use("/", routes);
app.use(express.static(__dirname + "/public"));
// app.use("/tasks/", tasks);
var server = app.listen(3000,function(){
	console.log("server is up and running");
	console.log(tasks);
});


// function onRequest (request, response) {
// 		response.writeHead(200, {"Content-type": "text/plain"});
// 		response.write(tasks.info[Math.floor(Math.random() * tasks.info.length)]);
// 		response.end();
// }