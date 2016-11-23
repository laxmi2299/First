var express = require('express'),
    app = express(),
    engine = require('consolidate');
var http = require('http');
var bodyParser = require('body-Parser');
var port = 8001;
app.engine('html',engine.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");//app.use(express.bodyParser());
//app.use(app.router);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//get request
app.get('/', function(req, res, next){
    res.render('hellos', {'fruits':['apple', 'orange', 'mango', 'banana']
});
});
app.post('/favorite_fruit', function(req, res, next){
    var favorite = req.body.fruit;
    if (typeof favorite == undefined){
        next(Error('Please choose your fruit!'));
    } else{
        res.send("your favorite fruit is" + favorite);
    }
});
app.listen(port, function(){
    console.log("server running on port" +port);
});