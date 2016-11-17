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
app.get('/:myFirst', function(req, res, next){
    var myFirst = req.params.myFirst;
    var mylast = req.query.mylast;
    var emailid = req.query.emailid;
    res.render('app', {firstname:myFirst, lastname:mylast,emailid:emailid});
});
app.listen(port, function(){
    console.log("server running on port" +port);
});