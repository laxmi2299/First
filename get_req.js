var express = require('express');
    app = express(),
    engines = require('consolidate');
    //bodyParser = require('body-parser');
//Adding templating engine as html and adding engine
app.engine('html' , engines.swig);
app.set('view engine', 'html');
//providing path of view(html)
app.set('views', __dirname + "/view");
//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var port = 8001;
//get request
app.get('/:name', function(req, res, next){
    var name = req.params.name;
    var getvar1 = req.query.getvar1;
    var getvar2 = req.query.getvar2;
    res.render('hello', {name:name, getvar1:getvar1,getvar2:getvar2});
});
app.listen(port, function(){
    console.log("server running on port" +port);
});
    