var express = require("express");
var routes = express.Router();
routes.get("/todo", function(req, res){
	res.send("GET​ ​request​ ​successful");
	console.log("GET​ ​request​ ​successful");
});
routes.delete("/todo", function(req, res) { 
	res.send("DELETE ​request​ ​successful");
	console.log("DELETE ​request​ ​successful");

});
routes.post("/todo", function(req, res){
	res.send("POST request​ ​successful");
	console.log("POST request​ ​successful");
});
routes.put("/todo", function(req, res){
	res.send("PUT request​ ​successful");
	console.log("PUT request​ ​successful");
});

module.exports = routes;