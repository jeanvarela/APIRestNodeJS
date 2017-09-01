var mongoose = require('mongoose');

var uri = 'mongodb://localhost/tet';
/*
mongoose.connect(urlString, function(err, res){
	if (err){
		console.log('Não foi possivel conectar a: ' + urlString);
	}else{
		console.log('Conectado com sucesso'); 
	}
});*/

mongoose.connect(uri,{ useMongoClient: true }); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ');
});

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {  
  console.log('Mongoose default connection is open');
});