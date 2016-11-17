var express = require('express'),
       http = require('http'),
       app = express();

app.get('/',function(req,res){
    res.send("hello world")
});

app.use(function(req,res){
    res.sendStatus(404);
});

var server = http.createServer(app);
server.listen(8001);
console.log("running on port 8001");      