var express 	 = require('express');
var path 		 = require('path');
var logger 		 = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser 	 = require('body-parser');

var port         = '3000';
var app          = module.exports =  express();

app.listen(port);  

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
	 res.setHeader('Access-Control-Allow-Origin','*');
	 res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE'); 
	 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	 next();
});